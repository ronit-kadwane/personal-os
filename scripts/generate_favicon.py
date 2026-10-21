#!/usr/bin/env python3
"""
Generate multi-resolution favicon.ico from public/favicon.svg
Uses sharp to rasterize SVG to PNG, then Pillow to assemble ICO.
"""
import os
import subprocess
from PIL import Image

def main():
    root_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    svg_path = os.path.join(root_dir, 'public', 'favicon.svg')
    public_dir = os.path.join(root_dir, 'public')
    app_ico = os.path.join(root_dir, 'src', 'app', 'favicon.ico')
    public_ico = os.path.join(root_dir, 'public', 'favicon.ico')

    sizes = [16, 32, 48, 64]
    png_paths = []

    for size in sizes:
        png_path = os.path.join(public_dir, f'temp-icon-{size}.png')
        cmd = [
            'node', '-e',
            f"const sharp = require('sharp'); sharp('{svg_path}').resize({size}, {size}).png().toFile('{png_path}')"
        ]
        subprocess.run(cmd, check=True)
        png_paths.append(png_path)

    images = [Image.open(p) for p in png_paths]
    img16, img32, img48, img64 = images

    # Save multi-size ICO
    img64.save(
        app_ico,
        format='ICO',
        sizes=[(16, 16), (32, 32), (48, 48), (64, 64)],
        append_images=[img48, img32, img16]
    )
    img64.save(
        public_ico,
        format='ICO',
        sizes=[(16, 16), (32, 32), (48, 48), (64, 64)],
        append_images=[img48, img32, img16]
    )

    for img in images:
        img.close()
    for p in png_paths:
        if os.path.exists(p):
            os.remove(p)

    print(f"Successfully generated favicon.ico at:\n- {app_ico}\n- {public_ico}")

if __name__ == '__main__':
    main()
