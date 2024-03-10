Start-Sleep -Seconds 5
$ports = 3000, 4000, 4001, 4002, 4003, 4005

foreach ($port in $ports) {
    $processes = Get-NetTCPConnection -LocalPort $port  | Select-Object -ExpandProperty OwningProcess
    if ($processes) {
        foreach ($process in $processes) {
            Stop-Process -Id $process -Force
            Write-Host "Stopped process with PID $process running on port $port"
        }
    }
    else {
        Write-Host "No processes found running on port $port"
    }
}
Get-Process | Where-Object { $_.MainWindowTitle -match 'cmd' }| Stop-Process -Force
Get-Process node | Where-Object { $_.MainWindowTitle -match 'Windows Powershell' }| Stop-Process -Force