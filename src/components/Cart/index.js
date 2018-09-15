import React from 'react'
import { connect } from 'react-redux'

const sort = (items) => {
    return items.sort((a, b) => {
        a.id < b.id
    })
}

const cartTotal = (cart) => {
    let total = 0
    cart.map((item) => {
        total += (item.price * item.quantity)
    })
    return total
}

const Cart = (props) => {
    return (
        <div>
            <div> 
                {
                    props.cart.length > 0 ?
                    sort(props.cart).map(item => (
                        <div key={item.id}>
                            <p> {item.name} </p>
                            <p> {item.quantity} </p>
                            <p> ${item.price} </p>
                            <button
                            onClick={() => props.addToCart(item)}
                            > + 
                            </button>
                            <button
                            onClick={() => props.removeFromCart(item)}
                            > - 
                            </button>
                            <button
                            onClick={() => props.removeAllFromCart(item)}
                            > Remove all
                            </button>
                        </div>
                    ))
                    :
                    <p>NO ITEMS IN CART</p>
                }
                <p>total: ${cartTotal(props.cart)}</p>
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        cart: state.cart,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addToCart: (item) => {
            dispatch({ type: 'ADD', payload: item })
        },
        removeFromCart: (item) => {
            dispatch({ type: 'REMOVE', payload: item })
        },
        removeAllFromCart: (item) => {
            dispatch({ type: 'REMOVE_ALL', payload: item })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)