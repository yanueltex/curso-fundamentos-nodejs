const sharp = require('sharp');

sharp('bg_modal_verde.png')
    .resize(80)
    .grayscale()
    .toFile('resized.png');