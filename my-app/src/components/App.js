import React from "react"
import Footer from "./Footer"
import Header from "./Header"
import MainContent from "./MainContent"
import Joke from "./Joke"
import jokesData from "./jokesData"
import productsData from "./productsData"
import Product from "./Product"

class App extends React.Component {
    constructor() {
        super() 
        this.state = {
            count: 0
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState(prevState => {
            return {
                count: prevState.count + 1
            }
        })

    }

    render() {
        const jokeComponents = jokesData.map(function(joke) {
            return (
                <Joke key = {joke.id} question={joke.question} punchLine={joke.punchLine} />
            )
        })
    
        const productsComponents = productsData.map((product) => {
            return (
                <Product key={product.id} name={product.name} price={product.price} description={product.description} />
            )
        })
    
        return (
            <div>
                <Header />
                <p>Count: {this.state.count}</p>
                <button onClick={this.handleClick}>Click me</button>
                <MainContent />
                {jokeComponents}
                {productsComponents}
                <Footer />
            </div>
        )
    }


}

export default App