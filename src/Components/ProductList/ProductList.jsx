import React from 'react';
import ProductCard from '../ProductCard/ProductCard';

const ProductList = ({products}) => {
    return (
        <div>
            <center>
                <h1>PRODUCTS</h1>
            </center>
        <div className='d-flex justify-content-evenly flex-wrap'>
            {products.map((item) => (
                <ProductCard item={item} key={item.id}/>

            ))}
        </div>
        </div>
    );
};

export default ProductList;