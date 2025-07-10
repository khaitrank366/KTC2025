import CartContext from './CartContext' // <-- sửa lại chính xác đường dẫn
import HomePage from './HomePage'
function MyShop() {
    const cartInfo ={
        userId: 1,
        username: "Tèo"
    };
  return (
    <div>
        <CartContext.Provider value={cartInfo}>
            <HomePage/>
            </CartContext.Provider>
    </div>
  )
}

export default MyShop