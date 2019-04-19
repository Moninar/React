import React from "react"
import TodoItem from "./TodoItem"

function MainContent () {
    let firstName = "Zhengyi"
    let lastName = "Zheng"
    return (
        <main>
            <p>My name is {`${firstName} ${lastName}`}</p>
            <div className="todo-list">
                <TodoItem />
                <TodoItem />
                <TodoItem />
                <TodoItem />
            </div>
        </main>
    )
}

export default MainContent