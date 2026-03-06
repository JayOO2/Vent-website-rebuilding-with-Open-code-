@echo off
echo Installing dependencies...
cd /d "%~dp0"
npm install
echo.
echo Building project...
npm run build
echo.
echo Starting server...
echo.
echo Opening website at http://localhost:3000
echo Press Ctrl+C to stop the server
echo.
npm run start
pause
