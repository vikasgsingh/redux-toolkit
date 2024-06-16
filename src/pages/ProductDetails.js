import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getproductDetails } from "./store/slices/getProDetailSlice";
import Loader from "./Loader";
const ProductDetail = () => {
    const proDetail = useSelector((state) => state?.getproductDetails?.productDetail)
    const loading = useSelector((state) => state?.getproductDetails.loading)
    const dispatch = useDispatch()
    const { id } = useParams();
    useEffect(() => {
        dispatch(getproductDetails(id))
    },[dispatch])
    console.log("pro",proDetail)
   
    return (
        <>
            { loading && <Loader /> }
            <div className="product-info">
                <h1>Inner Product</h1>
                <img className="product-img" src={proDetail.image} alt="product-img" />
                <h2>{proDetail.title}</h2>
                <h3>Price: {proDetail.price}</h3>
                <div className='rating'>
             {
                [...Array(5)].map((item, index) => {
                 return (
              <div key={index} 
                 className={index < proDetail?.rating?.rate ? "colored-star" : "transparent-star"}>
              </div>
                 )
                })
             }
            </div>
            </div>
        </>
    );
};

export default ProductDetail;
