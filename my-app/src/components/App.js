import React from "react"
import Footer from "./Footer"
import Header from "./Header"
import MainContent from "./MainContent"
import Joke from "./Joke"

function App() {
    return (
        <div>
            <Header />
            <MainContent />
            <Joke  question="what" punchLine="me" />
            <Joke  punchLine="me" />
            <Joke  question="why" punchLine="me" />
            <Joke  question="whre" punchLine="me" />
            <Joke  question="when" punchLine="me" />
            <Footer />
        </div>
    )
}

export default App