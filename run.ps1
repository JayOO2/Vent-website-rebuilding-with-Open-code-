# Cafe De Anatolia - Run Script
# Right-click this file and select "Run with PowerShell"

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Cafe De Anatolia Website" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Change to script directory
$ScriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $ScriptDir

Write-Host "[1/3] Installing dependencies..." -ForegroundColor Yellow
npm install

Write-Host ""
Write-Host "[2/3] Building project..." -ForegroundColor Yellow
npm run build

Write-Host ""
Write-Host "[3/3] Starting server..." -ForegroundColor Yellow
Write-Host ""
Write-Host "========================================" -ForegroundColor Green
Write-Host "  Website will open at: http://localhost:3000" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Green
Write-Host ""
Write-Host "Press Ctrl+C to stop the server" -ForegroundColor Gray

# Start the server
npm run start
