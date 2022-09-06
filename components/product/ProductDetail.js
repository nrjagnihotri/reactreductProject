import React, { useEffect } from 'react';
import { useParams } from "react-router-dom"
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { selectedProduct, removeSelectedProduct } from '../../redux/shopping/shopping-action';

const ProductDetail = () => {
    const products = useSelector((state) => state.shop.products);
    const { id, image, price, category, desciption, title } = products
    const { productID } = useParams();
    const dispatch = useDispatch();
    console.log(products);

    const fetchProductDetails = async () => {
        const response = await axios.get(`https://fakestoreapi.com/products/${productID}`).catch((err) => {
            console.log("ERRor", err);
        });
        dispatch(selectedProduct(response.data));
    }
    useEffect(() => {
        if (productID && productID !== "")
            fetchProductDetails();
        return () => {
            dispatch(removeSelectedProduct());
        }



    }, [productID]);

    return (
        <div className='ui grid container'>
            {Object.keys(products).length === 0 ? (<h1>loding</h1>) : (
                <div className='ui placeholder segment'>
                    <div className='ui two column stackble center aligned grid '>
                        <div className='ui vertical divider'></div>
                        <div className='vertical divider row'>
                            <div className='culumn lp' >
                                <img style={{ width: "200px" }} src={image} />
                            </div>
                        </div>
                        <div className='column rp' style={{ width: "400px" }}>
                            <h1>{title}</h1>
                            <h2 >
                                <a className='ui teal tag label'>${price}</a>
                            </h2>
                            <h3 >
                                {category}
                            </h3>
                            <p>{desciption}</p>
                            <div className='ui vertical animated button' tabIndex="0" >
                                <div className='hidden content'>
                                    <i className='shop icon'></i>

                                </div>
                                <div className='visible content' style={{ background: "red" }}>
                                    <h1 > Add to cart</h1>
                                </div>



                            </div>
                        </div>
                    </div>
                </div>
            )} </div>

    )
}

export default ProductDetail