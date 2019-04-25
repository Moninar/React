import React from "react"

class Product extends React.Component {
    render() {
        return (
            <div>
                <p>name: {this.props.name}</p>
                <p>price: {this.props.price}</p>
                <p>description: {this.props.description}</p>
            </div>
        )
    }
}

export default Product