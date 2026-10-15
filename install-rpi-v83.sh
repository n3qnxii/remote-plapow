#!/usr/bin/env bash
set -euo pipefail
APP_DIR="$(cd "$(dirname "$0")" && pwd)"
USER_NAME="${SUDO_USER:-$USER}"
USER_HOME="$(getent passwd "$USER_NAME" | cut -d: -f6)"
STAMP="$(date +%Y%m%d-%H%M%S)"
BACKUP_ROOT="$USER_HOME/tipkesorn-pos-backups"
mkdir -p "$BACKUP_ROOT"

echo "=== Tipkesorn POS V83 safe upgrade ==="
echo "New app: $APP_DIR"

# 1) Back up whichever old service/app is currently active. Do not delete it.
for SERVICE in tipkesorn-pos.service fish-pos.service; do
  OLD_DIR="$(systemctl show "$SERVICE" -p WorkingDirectory --value 2>/dev/null || true)"
  if [ -n "$OLD_DIR" ] && [ -d "$OLD_DIR" ] && [ "$OLD_DIR" != "$APP_DIR" ]; then
    echo "Backing up old app: $OLD_DIR"
    tar -czf "$BACKUP_ROOT/${SERVICE%.service}-$STAMP.tar.gz" -C "$(dirname "$OLD_DIR")" "$(basename "$OLD_DIR")" || true
    # Carry forward durable server data if an earlier version already has it.
    if [ -d "$OLD_DIR/data" ] && [ ! -e "$APP_DIR/data/live-state.json" ]; then
      mkdir -p "$APP_DIR/data"
      cp -a "$OLD_DIR/data/." "$APP_DIR/data/" || true
    fi
  fi
done

# 2) Install runtime without touching browser/local sales data.
sudo apt update
sudo apt install -y nodejs npm chromium curl
cd "$APP_DIR"
npm install --omit=dev
mkdir -p data/snapshots
chmod -R u+rwX data

# 3) Use ONE canonical service. Disable legacy duplicate service to avoid port conflicts.
sudo systemctl disable --now fish-pos.service 2>/dev/null || true
sudo systemctl disable --now tipkesorn-pos.service 2>/dev/null || true
NODE_BIN="$(command -v node)"
sudo tee /etc/systemd/system/tipkesorn-pos.service >/dev/null <<EOF
[Unit]
Description=Tipkesorn POS V83 (POS + LIVE + Epson + Display bridge)
After=network-online.target
Wants=network-online.target

[Service]
Type=simple
User=$USER_NAME
WorkingDirectory=$APP_DIR
ExecStart=$NODE_BIN $APP_DIR/server.js
Restart=always
RestartSec=3
Environment=NODE_ENV=production

[Install]
WantedBy=multi-user.target
EOF
sudo systemctl daemon-reload
sudo systemctl enable --now tipkesorn-pos.service

# 4) Keep customer display on the same stable URL. No re-pairing is required.
mkdir -p "$USER_HOME/.config/autostart"
cat > "$USER_HOME/.config/autostart/customer-display.desktop" <<'EOF'
[Desktop Entry]
Type=Application
Name=Tipkesorn Customer Display
Comment=Tipkesorn POS customer display
Exec=sh -c "sleep 8; chromium --ozone-platform=wayland --password-store=basic --no-first-run --disable-sync --disable-session-crashed-bubble --disable-translate --disable-features=Translate,TranslateUI --kiosk http://localhost:8080/customer.html"
Terminal=false
X-GNOME-Autostart-enabled=true
EOF
chown -R "$USER_NAME:$USER_NAME" "$USER_HOME/.config/autostart"

echo
echo "=== V83 READY ==="
sudo systemctl --no-pager --full status tipkesorn-pos.service || true
echo "POS:     http://<PI-IP>:8080/"
echo "LIVE:    http://<PI-IP>:8080/live"
echo "DISPLAY: http://localhost:8080/customer.html"
echo "DATA:    $APP_DIR/data/live-state.json"
echo "BACKUPS: $BACKUP_ROOT"
echo "Old app was backed up, not deleted. Epson IP/settings stay in the same iPad browser storage."
