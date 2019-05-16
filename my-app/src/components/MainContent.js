import React from "react"
import TodoItem from "./TodoItem"
import ContactCard from "./ContactCard"
import todoItemsData from "./todoItemsData"

class MainContent extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: todoItemsData
        }
        this.handleCheckbox = this.handleCheckbox.bind(this)
    }

    handleCheckbox(id) {
        this.setState(prevState => {
            const updatedTodos = prevState.todos.map(todo => {
                if (id === todo.id) todo.completed = !todo.completed
                return todo
            })
            return {
                todos: updatedTodos
            }
        })
    }

    render() {
        let firstName = "Zhengyi"
        let lastName = "Zheng"
        const todoItemComponent = this.state.todos.map(item => <TodoItem key={item.id} item={item} updatedState={this.handleCheckbox} />)
        return (
            <main>
                <p>My name is {`${firstName} ${lastName}`}</p>
                <div className="todo-list">
                    {todoItemComponent}
                </div>
                <div className="contact">
                    <ContactCard 
                        contact={{
                            imgUrl: "http://placekitten.com/300/200",
                            name: "Zhengyi",
                            phone: "(212) 555-1234",
                            email: "Zhengyi@catnap.meow"
                        }}
                    />
                    <ContactCard 
                        contact={{
                            imgUrl: "http://placekitten.com/400/300",
                            name: "Zhengyi",
                            phone: "(212) 555-1234",
                            email: "Zhengyi@catnap.meow"
                        }}                
                    />
                    <ContactCard 
                        contact={{
                            imgUrl: "http://placekitten.com/200/100",
                            name: "Zhengyi",
                            phone: "(212) 555-1234",
                            email: "Zhengyi@catnap.meow"
                        }}
                    />
                </div>
            </main>
        )
    }


}

export default MainContent