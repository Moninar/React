import React from "react"

function Joke(props) {
    return (
        <div>
            <h3 style={{display: !props.question && "none"}}>question: {props.question}</h3>
            <p style={{color: !props.question && "#888888"}}>answer: {props.punchLine}</p>
        </div>
    )
}

export default Joke