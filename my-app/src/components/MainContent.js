import React from "react"
import TodoItem from "./TodoItem"
import ContactCard from "./ContactCard"
import Conditional from "./Conditional"
import todoItemsData from "./todoItemsData"

class MainContent extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: todoItemsData,
            isLoading: false,
            unreadMessages: [],
            isLogin: false,
            charactor: {},
            ["first name"]: "",
            ["last name"]: "",
            isFriendly: false,
            gender: "",
            favColor: "red"
        }
        this.handleCheckbox = this.handleCheckbox.bind(this)
        this.logginOperation = this.logginOperation.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    logginOperation() {
        // console.log("clicked for login")
        this.setState(prevState => {
            return {
                isLogin: !prevState.isLogin
            }
        })
        console.log("loading status", this.state.isLogin)
    }

    componentDidMount() {
        // get the data I need to correctly display
        // setTimeout(() => {
        //     this.setState({
        //         isLoading: false
        //     })
        //     // console.log("inside the settimeout")
        // }, 2000)

        this.setState({isLoading: true})
        fetch("https://swapi.co/api/people/1").then(response => response.json()).then(data => {
            this.setState({
                isLoading: false,
                charactor: data
            })
        })
    }

    // componentWillzReceiveProps(nextProps) {
    //     if (nextProps.whatever !== this.props.whatever) {
    //         // do something important here
    //     }
    // }

    // shouldComponentUpdate(nextProps, nextState) {
    //     // return true if wnat to update
    //     // return false if not
    // }

    // componentWillUnmount() {
    //     // tear down or clean up your code before your component is disappeared
    //     // (e.g. remove event listeners)
    // }

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

    handleChange(event) {
        const {name, value, type, checked} = event.target
        type === 'checkbox' ? this.setState({[name]: checked}) : 
        this.setState({
            [name]: value
        })
    }

    render() {
        let firstName = "Zhengyi"
        let lastName = "Zheng"
        const todoItemComponent = this.state.todos.map(item => <TodoItem key={item.id} item={item} updatedState={this.handleCheckbox} />)
        const text = this.state.isLoading ? "Loading..." : this.state.charactor.name

        return (
            <main>
                <form>
                    <input type="text" name="first name" value={this.state["first name"]} placeholder="first name" onChange={this.handleChange} />
                    <br />
                    <input type="text" name="last name" value={this.state["last name"]} placeholder="last name" onChange={this.handleChange}/>
                    <br />
                    <textarea value="Some Defult Value" onChange={this.handleChange} />
                    <br />
                    <input type="checkbox" name="isFriendly" checked={this.state.isFriendly} onChange={this.handleChange} />
                    <br />
                    <input type="radio" name="gender" value="male" checked={this.state.gender === "male"} onChange={this.handleChange} /> Male 
                    <br />
                    <input type="radio" name="gender" value="female" checked={this.state.gender === "female"} onChange={this.handleChange} /> Female
                    <br />
                    <select value={this.state.favColor} name="favColor" onChange={this.handleChange}>
                        <option type="red">red</option>
                        <option type="blue">blue</option>
                        <option type="purple">purple</option>
                        <option type="light">light</option>
                        <option type="orange">orange</option>
                    </select>
                    
                    <h1>{this.state["first name"]} {this.state["last name"]}</h1>
                    <h1>Your favColor: {this.state.favColor}</h1>
                </form>
                <p>{text}</p>
                <button onClick={this.logginOperation}>{this.state.isLogin ? "Log out" : "Log in"}</button>
                <div>
                    {
                        this.state.unreadMessages.length > 0 && <h1>You have {this.state.unreadMessages.length} message(s) to read</h1>
                    }
                </div>
                <div>
                    <Conditional isLoading={this.state.isLoading} />
                </div>
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