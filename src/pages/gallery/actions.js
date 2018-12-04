export const GALLERY = 'GALLERY'
export const GALLERY_SUCCESS = 'GALLERY_SUCCESS'
export const GALLERY_FAILURE = 'GALLERY_FAILURE'
export const GALLERY_RESET = 'GALLERY_RESET'


export function requestGallery(album, year = null) {
  const data = {
    album,
    type: GALLERY,
  }
  if (year) {
    data.year = year
  }
  return data
}


export function requestGalleryReset() {
  return {
    type: GALLERY_RESET,
  }
}


export default {
  requestGallery,
}
