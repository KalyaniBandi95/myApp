import React, { Component }from "react";
import axios from "axios";
const apiurl = "http://jsonplaceholder.typicode.com"

export default class ReactApi extends Component{

    state = {
        users: []
    }

    componentDidMount(){
        const url = `${apiurl}/users/`
        axios.get(url).then(response => response.data)
        .then(data => {
            this.setState({users: data})
            console.log(this.state.users)
        })
    }

    render() {
        return (
            <div className = "container">
                <div className = "col-xs-8">
                    <h2>React User details </h2>
                    {
                        this.state.users.map((user) => (
                            <div className = "card">
                                <div className = "card-body">
                                    <h5 className = "card-title">{user.name}</h5>
                                    <h6 className = "card-subtitle mb-2 text-muted">{user.email}</h6>
                                </div>
                            </div>
                        ))
                    }                    
                </div>
            </div>
        )
    }
}