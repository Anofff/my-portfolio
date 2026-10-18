// Images are hosted on Cloudinary and referenced by URL.
// cld() adds automatic format + quality and an optional width, so the browser
// gets a right-sized WebP/AVIF instead of the original upload.
//
//   cld('https://res.cloudinary.com/<cloud>/image/upload/v123/cover.jpg', { width: 800 })
//   → https://res.cloudinary.com/<cloud>/image/upload/f_auto,q_auto,c_limit,w_800/v123/cover.jpg
//
// Non-Cloudinary URLs are returned unchanged.

const UPLOAD = '/image/upload/'

export function cld(url, { width } = {}) {
  if (!url || !url.includes('res.cloudinary.com') || !url.includes(UPLOAD)) {
    return url
  }
  const parts = ['f_auto', 'q_auto']
  if (width) parts.push('c_limit', `w_${width}`)
  return url.replace(UPLOAD, `${UPLOAD}${parts.join(',')}/`)
}

// srcset for responsive images: 1x and 2x of the display width.
export function cldSrcSet(url, width) {
  if (!url || !url.includes('res.cloudinary.com')) return undefined
  return `${cld(url, { width })} 1x, ${cld(url, { width: width * 2 })} 2x`
}
