import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import CartContainer from './compornents/CartContainer';
import Navbar from './compornents/Navbar';
import { useEffect } from 'react';
import { calculateTotals } from './features/cart/CartSlice';
import Modal from './compornents/Modal';



function App() {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart)
  const { isOpen } = useSelector((state) => state.modal)

  useEffect(() => {
    dispatch(calculateTotals())
  },[cartItems])

  return (
  <main>
    {isOpen && <Modal />}
    <Navbar />
    <CartContainer />
  </main>
  );
}

export default App;
