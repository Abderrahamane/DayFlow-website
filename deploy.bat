@echo off
echo ========================================
echo   DayFlow Website - Quick Deploy
echo ========================================
echo.

echo [Step 1] Checking Git status...
git status

echo.
echo [Step 2] Staging all changes...
git add .

echo.
echo [Step 3] Committing changes...
set /p commit_msg="Enter commit message (or press Enter for default): "
if "%commit_msg%"=="" set commit_msg=Updated website design and features

git commit -m "%commit_msg%"

echo.
echo [Step 4] Pushing to GitHub...
git push origin master

echo.
echo ========================================
echo ✅ Code pushed to GitHub successfully!
echo ========================================
echo.
echo Next steps:
echo 1. Go to https://vercel.com/new
echo 2. Import your repository
echo 3. Click Deploy
echo.
echo Your website will be live in ~2 minutes! 🚀
echo.
pause

