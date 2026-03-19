$src = 'C:\Users\hw\Downloads\english_adventure (4).zip'
$dst = 'C:\Users\hw\WorkBuddy\20260319083221\english_apk\app\src\main\assets\www'
Add-Type -AssemblyName System.IO.Compression.FileSystem
$zip = [System.IO.Compression.ZipFile]::OpenRead($src)
foreach ($entry in $zip.Entries) {
    $name = $entry.FullName -replace '^[^/]+/', ''
    if ($name -eq '') { continue }
    $target = Join-Path $dst $name
    $dir = Split-Path $target -Parent
    if (-not (Test-Path $dir)) { New-Item -ItemType Directory -Path $dir -Force | Out-Null }
    if (-not $name.EndsWith('/')) {
        [System.IO.Compression.ZipFileExtensions]::ExtractToFile($entry, $target, $true)
        Write-Host "Extracted: $name"
    }
}
$zip.Dispose()
Write-Host 'All extracted!'
