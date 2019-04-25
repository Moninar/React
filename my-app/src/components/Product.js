import React from "react"

function Product(props) {
    return (
        <div>
            <p>name: {props.name}</p>
            <p>price: {props.price}</p>
            <p>description: {props.description}</p>
        </div>
    )
}

export default Product