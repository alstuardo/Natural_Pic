import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <Link to='/' className='text-decoration-none'> Home </Link> |
      <Link to='/favoritos' className='text-decoration-none'>   Favoritos </Link>
    </nav>
  )
}
export default Navbar
