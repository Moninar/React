import React from "react"
import Footer from "./Footer"
import Header from "./Header"
import MainContent from "./MainContent"
import Joke from "./Joke"
import jokesData from "./jokesData"
import productsData from "./productsData"
import Product from "./Product"
import MemeGenerator from "./MemeGenerator"

// https://medium.freecodecamp.org/every-time-you-build-a-to-do-list-app-a-puppy-dies-505b54637a5d

// https://medium.freecodecamp.org/want-to-build-something-fun-heres-a-list-of-sample-web-app-ideas-b991bce0ed9a

// https://medium.freecodecamp.org/summer-is-over-you-should-be-coding-heres-yet-another-list-of-exciting-ideas-to-build-a95d7704d36d

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
                <MemeGenerator />
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