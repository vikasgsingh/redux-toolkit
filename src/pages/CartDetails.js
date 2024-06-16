import { useDispatch, useSelector } from 'react-redux';
import { deleteCart, removeCart, addCart } from './store/slices/getCartSlice';

const CartDetails = () => {
    const cart = useSelector((state) => state?.getCart?.cartData)
    
    const dispatch = useDispatch();
    
    const handleDeleteItem = (id) => {
        dispatch(deleteCart({ id }));
    };

    const addData = (id) => {
         dispatch(addCart({id}))
    };
    
    const removeData=(id)=>{
           dispatch(removeCart({id}))
    }

    return (
        <>
            <h2>Cart details page</h2>
            <div className="box">
                {
                    cart?.map((item, id) => {
                        return (
                            <div className='details-wrap' key={id}>
                                <img src={item.image} alt={item.title} />
                                <h2>{item.title.length > 30 ? item.title.slice(0, 20) + '...' : item.title}</h2>
                                <h3>Price: {item.price}</h3>
                                <button className='cart' onClick={() => handleDeleteItem(item.id)}>Delete Item</button>
                                <div className="quantity">
                                    <input type="number" value={item.quantity} />
                                    <button className="btn add-btn" onClick={() =>addData(item.id)}>+</button>
                                    <button className="btn" onClick={() =>removeData(item.id)}>-</button>
                                </div>
                                <h3>Total Price: { item.price * item.quantity }</h3>
                            </div>
                        );
                    })
                }
            </div>
        </>
    );
}

export default CartDetails;
