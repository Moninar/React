import React from "react"

function Joke(props) {
    return (
        <div>
            <h3 style={{display: props.question ? "block" : "none"}}>question: {props.question}</h3>
            <p>answer: {props.punchLine}</p>
        </div>
    )
}

export default Joke