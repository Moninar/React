import React from "react"
import Footer from "./Footer"
import Header from "./Header"
import MainContent from "./MainContent"
import Joke from "./Joke"
import jokesData from "./jokesData"
import productsData from "./productsData"
import Product from "./Product"

function App() {
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
            <MainContent />
            {jokeComponents}
            {productsComponents}
            <Footer />
        </div>
    )
}

export default App