# Validates CNC Mastery lesson files in <LessonsRoot>/<module>/<NN-slug>.md
# Optional: pass -ModulesRoot to cross-check module slugs against src/data/modules/*.yaml
param(
  [string]$LessonsRoot = (Join-Path $PSScriptRoot '..\src\data\lessons'),
  [string]$ModulesRoot = ''   # e.g. D:\Claud code\Milans website\src\data\modules
)
$ErrorActionPreference = 'Stop'
$modules = @{}
if ($ModulesRoot -and (Test-Path $ModulesRoot)) {
  Get-ChildItem -LiteralPath $ModulesRoot -Filter *.yaml | ForEach-Object { $modules[$_.BaseName] = $true }
}
$issues = @()
$files = Get-ChildItem -LiteralPath $LessonsRoot -Recurse -Filter *.md
if (-not $files) { Write-Output 'NO LESSON FILES FOUND'; exit 0 }
foreach ($f in $files) {
  $rel = $f.FullName.Substring((Resolve-Path $LessonsRoot).Path.Length + 1)
  $folder = Split-Path $rel -Parent
  $base = $f.BaseName
  $content = Get-Content -LiteralPath $f.FullName -Raw
  $lines = $content -split "`n"
  if ($lines[0].Trim() -ne '---') { $issues += "$rel : missing opening ---" }
  $endIdx = -1
  for ($i=1; $i -lt $lines.Count; $i++) { if ($lines[$i].Trim() -eq '---') { $endIdx = $i; break } }
  if ($endIdx -lt 0) { $issues += "$rel : frontmatter not closed"; continue }
  $fm = ($lines[1..($endIdx-1)]) -join "`n"
  foreach ($key in 'title','module','lessonNumber','description','objectives','duration','difficulty','tags') {
    if ($fm -notmatch "(?m)^$key\s*:") { $issues += "$rel : missing key $key" }
  }
  if ($fm -match "(?m)^lessonNumber\s*:\s*(\d+)") {
    $n = [int]$Matches[1]
    $expect = [int](($base -split '-')[0])
    if ($n -ne $expect) { $issues += "$rel : lessonNumber $n != filename $expect" }
  } else { $issues += "$rel : lessonNumber not numeric" }
  if ($fm -match "(?m)^module\s*:\s*`"?([^`"\r\n]+)`"?") {
    $m = $Matches[1].Trim()
    if ($m -ne $folder) { $issues += "$rel : module '$m' != folder '$folder'" }
    if ($ModulesRoot -and $modules.Count -gt 0 -and -not $modules.ContainsKey($m)) { $issues += "$rel : module '$m' has no YAML in modules/" }
  } else { $issues += "$rel : module key unreadable" }
  if ($fm -notmatch '(?m)^difficulty\s*:\s*"?\s*(beginner|intermediate|advanced)\s*"?\s*$') { $issues += "$rel : difficulty invalid" }
  if ($fm -notmatch '(?m)^duration\s*:\s*"?\d+\s*minutes?"?') { $issues += "$rel : duration format" }
  $body = ($lines[($endIdx+1)..($lines.Count-1)]) -join "`n"
  if ($body -match '(?m)^# ') { $issues += "$rel : has H1 heading" }
  if ($body -match ':::quiz') { $issues += "$rel : uses :::quiz callout" }
  $bad = [regex]::Matches($body, ':::(\w[\w-]*)') | ForEach-Object { $_.Groups[1].Value } | Where-Object { $_ -notin @('key-concept','warning','pro-tip') }
  if ($bad) { $issues += "$rel : unknown callout type(s): $($bad -join ',')" }
  if ($body -notmatch '<details>') { $issues += "$rel : no self-check details blocks" }
  $qa = ([regex]::Matches($body, '(?m)^\*\*\d+\.')).Count
  if ($qa -lt 3 -or $qa -gt 5) { $issues += "$rel : $qa self-check questions (want 3-5)" }
  if ($content -match '(?m)^\s*=== FILE') { $issues += "$rel : contains === FILE marker" }
}
if ($issues.Count -eq 0) { Write-Output "ALL OK - $($files.Count) lesson files validated" }
else { $issues | ForEach-Object { Write-Output $_ }; Write-Output "TOTAL ISSUES: $($issues.Count)" }
