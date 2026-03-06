@echo off
cd /d "%~dp0"
echo Starting Cafe De Anatolia website...
echo.
echo Opening at http://localhost:3000
echo.
echo If browser doesn't open, manually go to: http://localhost:3000
echo.
echo Press Ctrl+C to stop the server when done
echo.
npm run start
pause
