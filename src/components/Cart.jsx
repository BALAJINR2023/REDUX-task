import { useSelector, useDispatch } from 'react-redux';
import { increaseQuantity, decreaseQuantity, getTotalQuantity, getTotalAmount } from '../features/cart/cartSlice';
import "../App.css"
import { Link } from 'react-router-dom';
const Cart = () => {
  const cart = useSelector((state) => state.cart.cart);
  const totalQuantity = useSelector(getTotalQuantity);
  const totalAmount = useSelector(getTotalAmount);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>SHOPPING CART</h1>
      <table style={{border: "1px solid black", margin:"10px"}}>
        <thead>
          <tr>
            <th>Item</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody style={{border: "1px solid black"}}>
          {cart.map((item) => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td>${item.price.toFixed(2)}</td>
              <td>{item.quantity}</td>
              <td>${(item.price * item.quantity).toFixed(2)}</td>
              <td>
                <span><button onClick={() => dispatch(increaseQuantity(item.id))}>+</button></span>
                <span><button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button></span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2 className='tQ'>Total Quantity: {totalQuantity}</h2>
      <h2 className='ta'>Total Amount: ${totalAmount.toFixed(2)}</h2>
      <Link to="/products">Back to Products</Link>
    </div>
  );
};

export default Cart;
