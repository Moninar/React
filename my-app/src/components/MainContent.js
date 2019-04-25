import React from "react"
import TodoItem from "./TodoItem"
import Contact from "./ContactCard"
import ContactCard from "./ContactCard"
import todoItemsData from "./todoItemsData"

function MainContent () {
    let firstName = "Zhengyi"
    let lastName = "Zheng"
    const todoItemComponent = todoItemsData.map(item => <TodoItem key={item.id} item={item} />)
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

export default MainContent