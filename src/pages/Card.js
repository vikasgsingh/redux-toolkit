import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { addCart } from './store/slices/getCartSlice';
import { deleteCart } from './store/slices/getCartSlice';



const Card = ({ data }) => {
  const dispatch = useDispatch();
  const handleClick = (payload) => {
    dispatch(addCart(payload));
  };

  const handleDeleteItem = (id) => {
    dispatch(deleteCart({ id }));
};
  const cart = useSelector((state) => state?.getCart?.cartData)

  const cartId=[]

  cart.filter(element => {
    cartId.push(element.title)
  });

  return (
    <>
      <Link to={`/products/${data.id}`} className="img-wrap">
        <img src={data.image} height="300px" width="400px" alt="img" />
        <h2>{data.title.length > 30 ? data.title.slice(0, 20) + '...' : data.title}</h2>
        <h3>Price:{data.price}</h3>
      </Link>
      {
        cartId.includes(data.title)? <button type="button" className="cart"
         onClick={() =>handleDeleteItem(data.id)}>Remove to Cart</button>
        :<button type="button" className="cart" onClick={()=>handleClick(data)}>Add to Cart</button>
      }
    </>
  )
}

export default Card
