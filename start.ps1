# Define an array of paths to your npm projects
$projectPaths = @(
    ".\posts",
    ".\comments",
    ".\event-bus",
    ".\query",
    ".\moderation",
    ".\client"
    # Add paths to all your projects here
)

# Loop through each project path and start npm start command in the background
foreach ($path in $projectPaths) {
    Start-Process -FilePath "cmd.exe" -ArgumentList "/c cd `"$path`" && npm start" -NoNewWindow
}
