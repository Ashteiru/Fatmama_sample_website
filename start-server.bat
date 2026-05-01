@echo off
REM Simple HTTP Server for Mama & Co. Website
echo.
echo ========================================
echo   Mama & Co. - Local Server
echo ========================================
echo.

REM Check if Python is installed
python --version >nul 2>&1
if %errorlevel% neq 0 (
    echo Python not found. Please install Python from python.org
    pause
    exit /b 1
)

echo Starting local server...
echo.
echo Server is running at: http://localhost:8000
echo.
echo Press Ctrl+C to stop the server
echo.
echo Opening browser...

REM Start Python server in background and open browser
start http://localhost:8000
python -m http.server 8000

pause
