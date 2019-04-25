import React from "react"
import Footer from "./Footer"
import Header from "./Header"
import MainContent from "./MainContent"
import Joke from "./Joke"
import jokesData from "./jokesData"

function App() {
    const jokeComponents = jokesData.map(function(joke) {
        return (
            <Joke key = {joke.id} question={joke.question} punchLine={joke.punchLine} />
        )
    })
    return (
        <div>
            <Header />
            <MainContent />
            {jokeComponents}
            <Footer />
        </div>
    )
}

export default App