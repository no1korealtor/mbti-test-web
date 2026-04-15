Add-Type -AssemblyName System.Drawing
$imagePath = "C:\Users\USER\.gemini\antigravity\brain\f93dd2b2-4ac5-4582-820d-61486ec06c92\mbti_grid_1776242161931.png"
$outDir = "d:\부동산업무\antigravity\step2\images"
$img = [System.Drawing.Image]::FromFile($imagePath)
$w = $img.Width / 4
$h = $img.Height / 4

$mbtiList = @(
    "ISTJ", "ISFJ", "INFJ", "INTJ",
    "ISTP", "ISFP", "INFP", "INTP",
    "ESTP", "ESFP", "ENFP", "ENTP",
    "ESTJ", "ESFJ", "ENFJ", "ENTJ"
)

$idx = 0
for ($row = 0; $row -lt 4; $row++) {
    for ($col = 0; $col -lt 4; $col++) {
        $mbti = $mbtiList[$idx]
        $rect = New-Object System.Drawing.Rectangle([int]($col*$w), [int]($row*$h), [int]$w, [int]$h)
        $bmp = New-Object System.Drawing.Bitmap([int]$w, [int]$h)
        $g = [System.Drawing.Graphics]::FromImage($bmp)
        $g.DrawImage($img, (New-Object System.Drawing.Rectangle(0,0,[int]$w,[int]$h)), $rect, [System.Drawing.GraphicsUnit]::Pixel)
        $g.Dispose()
        $savePath = Join-Path -Path $outDir -ChildPath "$mbti.png"
        $bmp.Save($savePath, [System.Drawing.Imaging.ImageFormat]::Png)
        $bmp.Dispose()
        $idx++
    }
}
$img.Dispose()
