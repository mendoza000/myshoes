import {useState, useEffect} from 'react'

export default function useImages ({data}) {
  const [imagesLoaded, setImagesLoaded] = useState(false)
  const [imagesLoadError, setImagesLoadError] = useState(false)

  useEffect(() => {
    const loadImage = image => {
      return new Promise((resolve, reject) => {
        const loadImg = new Image()
        loadImg.src = image
        loadImg.onload = () => {
          resolve(image)
        }
        loadImg.onerror = err => reject(err)
      })
    }
    Promise.all(data.map(setOfData => loadImage(setOfData.cardPhoto)))
    .then(() => setImagesLoaded(true))
    .catch(err => setImagesLoadError(true))

  }, [data])

  return {imagesLoaded, imagesLoadError}

}