import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Favorites from './views/Favorites'
import Home from './views/Home'
import PhotosContextProvider from './store/PhotosContext'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <PhotosContextProvider>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/favoritos' element={<Favorites />} />
          </Routes>
        </PhotosContextProvider>
      </BrowserRouter>
    </>
  )
}
export default App
