@echo off
title Speak and Print  -  keep this window open
cd /d "%~dp0"
echo.
echo    Starting Speak and Print...
echo    Your browser will open at  http://localhost:8765/
echo.
echo    Keep this window open while you use the app.
echo    Close it when you are finished.
echo.
start "" "http://localhost:8765/"
node server.js
if errorlevel 9009 (
  echo    Node.js not found, trying Python instead...
  python -m http.server 8765 --bind 127.0.0.1
)
echo.
echo    The app has stopped.
pause
