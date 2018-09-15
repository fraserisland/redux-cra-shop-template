import React from 'react';

import AddBtn from '../addBtn'
import RemoveBtn from '../removeBtn'
import './styles.css'

const ProductListItem = (props) => {
    return ( 
        <div className="list-item__container"> 
            <h3>{props.product.name}</h3> 
            <img 
                height={100}
                title={props.product.name}
                src={`/images/${props.product.image}`} 
            />
            <div>{props.product.description}</div>
            <div>$ {props.product.price}</div>
            <AddBtn 
                cartItem={props.cartItem} 
                product={props.product}
                addToCart={props.addToCart} 
            />
            {
                props.cartItem &&
                <RemoveBtn 
                    cartItem={props.cartItem} 
                    product={props.product}
                    removeFromCart={props.removeFromCart} 
                />
            }
        </div>
     );
}
 
export default ProductListItem;