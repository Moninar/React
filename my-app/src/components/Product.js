import React from "react"

class Product extends React.Component {
    constructor() {
        super()
        this.state = {
            answer: "Yes"
        }
    }

    render() {
        return (
            <div>
                <p>name: {this.props.name}</p>
                <p>price: {this.props.price}</p>
                <p>description: {this.props.description}</p>
                <p>answer: {this.state.answer}</p>
                
            </div>
        )
    }
}

export default Product