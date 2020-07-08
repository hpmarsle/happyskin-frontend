import React from 'react'
import ProductCard from './ProductCard'
import { Link } from 'react-router-dom'

export default function Products(props) {

    return (
        <div>
            {props.products.map(product => 
                <Link to ={`/products/${product.id}`}>
                < ProductCard 
                id={product.id} 
                name={product.name} 
                brand={product.brand} 
                image={product.image} 
                price={product.price}
                reviews={product.reviews}
                /> 
                </Link>
            )}
        </div>
    )
}

