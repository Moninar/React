import React from "react"

function FormComponent(props) {
    return (
        <form>
            <input type="text" name="first name" value={props.data["first name"]} placeholder="first name" onChange={props.handleChange} />
            <br />
            <input type="text" name="last name" value={props.data["last name"]} placeholder="last name" onChange={props.handleChange}/>
            <br />
            <textarea value="Some Defult Value" onChange={props.handleChange} />
            <br />
            <input type="checkbox" name="isFriendly" checked={props.data.isFriendly} onChange={props.handleChange} />
            <br />
            <input type="radio" name="gender" value="male" checked={props.data.gender === "male"} onChange={props.handleChange} /> Male 
            <br />
            <input type="radio" name="gender" value="female" checked={props.data.gender === "female"} onChange={props.handleChange} /> Female
            <br />
            <select value={props.data.favColor} name="favColor" onChange={props.handleChange}>
                <option value="">-- please choose your color --</option>
                <option value="red">red</option>
                <option value="blue">blue</option>
                <option value="purple">purple</option>
                <option value="light">light</option>
                <option value="orange">orange</option>
            </select>
            
            <h1>{props.data["first name"]} {props.data["last name"]}</h1>
            <h1>Your favColor: {props.data.favColor}</h1>
        </form>
    )
}

export default FormComponent