#!/usr/bin/env python3
"""
Fix double-UTF-8-encoded mojibake in lesson markdown files.

The bug: text was UTF-8 bytes, misread as Windows-1252/Latin-1 into a string,
then that garbled string was re-encoded as UTF-8 and saved. This reverses it:
take each character, get its Windows-1252 byte value (or pass through
identity for the 5 codepoints cp1252 leaves undefined: 0x81,0x8D,0x8F,0x90,0x9D),
then decode those bytes as UTF-8 to recover the original character.

Only touches files that actually contain the mojibake marker sequences.
"""
import sys
from pathlib import Path

MOJIBAKE_MARKERS = ['Ã', 'â€', 'Â°', 'Â²', 'Â³', 'â‰', 'â†', 'Ï€', 'Î²', 'Î»', 'âˆ']

def fix_mojibake(s: str) -> str:
    out = bytearray()
    for ch in s:
        cp = ord(ch)
        try:
            out += ch.encode('cp1252')
        except UnicodeEncodeError:
            if cp < 256:
                out.append(cp)
            else:
                # Not a mojibake byte at all (a real non-Latin char) - keep as-is via utf-8
                out += ch.encode('utf-8')
    try:
        return out.decode('utf-8')
    except UnicodeDecodeError:
        # Couldn't fully reverse - return original unchanged, flag for manual review
        raise

def main():
    root = Path(sys.argv[1]) if len(sys.argv) > 1 else Path('src/data/lessons')
    files = sorted(root.rglob('*.md'))
    fixed_count = 0
    skipped = []
    failed = []
    for f in files:
        content = f.read_text(encoding='utf-8')
        if not any(marker in content for marker in MOJIBAKE_MARKERS):
            continue
        try:
            fixed = fix_mojibake(content)
        except UnicodeDecodeError as e:
            failed.append((f, str(e)))
            continue
        if fixed != content:
            f.write_text(fixed, encoding='utf-8', newline='\n')
            fixed_count += 1
            print(f'FIXED: {f.relative_to(root.parent.parent.parent)}')
    print(f'\n{fixed_count} files fixed.')
    if failed:
        print(f'{len(failed)} files FAILED (manual review needed):')
        for f, err in failed:
            print(f'  {f}: {err}')

if __name__ == '__main__':
    main()
