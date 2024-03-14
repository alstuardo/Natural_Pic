import { createContext, useEffect, useState } from 'react'

export const PhotosContext = createContext()

const url = './photos.json'

const PhotosContextProvider = ({ children }) => {
  const [photos, setPhotos] = useState([])

  const getPhotos = async () => {
    const response = await fetch(url)
    const { photos: photosApi } = await response.json()
    setPhotos(photosApi.map((photo) => ({ ...photo, isFavorite: false })))
  }

  useEffect(() => {
    getPhotos()
  }, [])

  const stateGlobal = { photos, setPhotos }

  return (
    <PhotosContext.Provider value={stateGlobal}>
      {children}
    </PhotosContext.Provider>
  )
}

export default PhotosContextProvider
