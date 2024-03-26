import CartWidget from './CartWidget';
import logo from './assets/logo.jpeg';
const NavBar = () => {
    
  return (
    <nav>
        <img style={{width:'100px'}} src={logo} alt="logo empresa"/>

        <div>
            <button>Home</button>
            <button>Productos</button>
            <button>Contacto</button>
        </div>

        <CartWidget/>

    </nav>
  )
}

export default NavBar