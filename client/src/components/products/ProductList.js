import React, { useMemo } from 'react'
import { getItemsByType } from '../../selectors/getItemsByType'
import { ProductCard } from './ProductCard';
import './Product.css'

export const ProductList = ({type}) => {

    
    const product = useMemo(() => getItemsByType(type), [type]);
    //console.log(heroes);

    return (
        
        <div className="animate__animated animate__fadeIn">
            <div className="row row-cols-1 row-cols-md-5 contenedor">

            {
                product.map(elment=>(
                    <ProductCard key={elment.id}{...elment}/>
                ))
            }
            </div>

        </div>
    )
}
