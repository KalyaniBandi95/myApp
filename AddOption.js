import React, {Component} from "react";

export default class AddOption extends Component{
    addUser = (e) => {
        e.preventDefault();
        const name = e.target.elements.userdata.value;
       this.props.addUserdata(name);
        // alert("User " + data +" is added")
    }
    render(){
        return(
            <div>
                
                <form onSubmit={this.addUser}>
                    Name: <input type="text" name="userdata"/>
                <button className = "btn btn-primary">Add User</button>
                </form>

            </div>
        )
    }
}