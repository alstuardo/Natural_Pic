import { useContext } from 'react'
import { PhotosContext } from '../store/PhotosContext'

const Favorites = () => {
  const { photos, setPhotos } = useContext(PhotosContext)

  const removeFavorite = (id) => {
    const newPhotos = photos.map((photo) => {
      if (photo.id === id) {
        return {
          ...photo, isFavorite: false
        }
      }
      return photo
    })
    setPhotos(newPhotos)
  }
  return (
    <div className='container'>
      <h1 className='App'>Fotos favoritas</h1>
      <div className='gallery grid-columns-4 p-3'>
        {photos.filter((photo) => photo.isFavorite).map((photo, i) => (
          <img
            src={photo.src.tiny}
            alt=''
            onClick={() => removeFavorite(photo.id)}
            key={i}
          />
        ))}
      </div>
    </div>
  )
}
export default Favorites
