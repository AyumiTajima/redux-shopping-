import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import cartSlice, { clearCart } from "../features/cart/CartSlice"
import CartItem from './CartItem';
import { openModal } from '../features/modal/ModalSlice';


export const CartContainer = () => {
    const dispatch = useDispatch()
    const { amount, cartItems, total } = useSelector((store) => store.cart);

    if(amount < 1){
        return(
            <section className='cart'>
                <header>
                    <h2>買い物かご</h2>
                    <h4 className='empty-cart'>入ってなす</h4>
                </header>
            </section>
        )
    };

    return(
        <section className='cart'>
            <header>
                <h2 >買い物かご</h2>
            </header>
            <div>
                {cartItems.map((item)=>{
                    return <CartItem key={item.id}{...item}/>
                })}
            </div>
            <footer>
                <hr />
                <div className='cart-total'>
                    <h4>
                        合計<span>{total}円</span>
                    </h4>
                </div>
                <button className='btn clear-btn' onClick={ () => dispatch(openModal()) }>全削除</button>
            </footer>
        </section>
    )
}


export default CartContainer