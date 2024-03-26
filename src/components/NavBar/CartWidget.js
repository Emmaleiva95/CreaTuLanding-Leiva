import cart from './assets/cart.png';

const CartWidget = () => {
  return (
    <div>
    <img style={{width:'30px'}} src={cart} alt="logo cart"/>
        <span>3</span>
    </div>
  )
}

export default CartWidget