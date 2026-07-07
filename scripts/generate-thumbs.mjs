import sharp from 'sharp'
import { readdirSync, mkdirSync, existsSync } from 'node:fs'
import { extname, join } from 'node:path'

const photosDir = new URL('../public/photos/', import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1')
const thumbsDir = join(photosDir, 'thumbs')

if (!existsSync(thumbsDir)) mkdirSync(thumbsDir)

const files = readdirSync(photosDir).filter((f) => ['.jpg', '.jpeg', '.png'].includes(extname(f).toLowerCase()))

for (const file of files) {
  const src = join(photosDir, file)
  const dest = join(thumbsDir, file.replace(/\.(jpe?g|png)$/i, '.jpg'))
  await sharp(src).rotate().resize({ width: 700 }).jpeg({ quality: 72 }).toFile(dest)
  console.log('thumb ->', file)
}
