import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';




const ProductComponent = () => {

    const products = useSelector((state) => state.shop.products);
    const rendeList = products.map((product) => {
        const { id, title, image, price, category } = product;
        return (<div className='ui grid container ' key={id}>
            <Link to={`/product/${id}`} >
                <div className='ui link cards'>
                    <div className='card' style={{ width: '18rem' }} >
                        <div className='image'>
                            <img src={image} alt={title} />
                        </div>
                        <div className='content'>
                            <div className='ui sub header' >{title}</div>
                            <div className='ui teal tag label' >${price}</div>
                            <div className='ui brown block header'>{category}</div>
                        </div>

                    </div>

                </div>
            </Link>
        </div>);
    })


    return (<>
        {rendeList}

    </>)
}

export default ProductComponent