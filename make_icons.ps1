Add-Type -AssemblyName System.Drawing

$sizes = @(
    @{name='mipmap-mdpi';size=48},
    @{name='mipmap-hdpi';size=72},
    @{name='mipmap-xhdpi';size=96},
    @{name='mipmap-xxhdpi';size=144},
    @{name='mipmap-xxxhdpi';size=192}
)

$basePath = 'C:\Users\hw\WorkBuddy\20260319083221\english_apk\app\src\main\res'

foreach ($s in $sizes) {
    $sz = $s.size
    $bmp = New-Object System.Drawing.Bitmap($sz, $sz)
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
    $g.Clear([System.Drawing.Color]::FromArgb(255, 67, 97, 238))

    $fontSize = [int]($sz * 0.4)
    $font = New-Object System.Drawing.Font('Arial', $fontSize, [System.Drawing.FontStyle]::Bold)
    $brush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::White)
    $sf = New-Object System.Drawing.StringFormat
    $sf.Alignment = [System.Drawing.StringAlignment]::Center
    $sf.LineAlignment = [System.Drawing.StringAlignment]::Center
    $rect = New-Object System.Drawing.RectangleF(0, 0, $sz, $sz)
    $g.DrawString('E', $font, $brush, $rect, $sf)

    $dir = Join-Path $basePath $s.name

    $ms1 = New-Object System.IO.MemoryStream
    $bmp.Save($ms1, [System.Drawing.Imaging.ImageFormat]::Png)
    [System.IO.File]::WriteAllBytes((Join-Path $dir 'ic_launcher.png'), $ms1.ToArray())

    $ms2 = New-Object System.IO.MemoryStream
    $bmp.Save($ms2, [System.Drawing.Imaging.ImageFormat]::Png)
    [System.IO.File]::WriteAllBytes((Join-Path $dir 'ic_launcher_round.png'), $ms2.ToArray())

    $g.Dispose(); $bmp.Dispose(); $ms1.Dispose(); $ms2.Dispose()
    Write-Host "Generated $($s.name)"
}
Write-Host "All icons done!"
