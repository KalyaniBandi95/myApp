import React, { Component }from "react";
import axios from "axios";
const apiurl = "http://jsonplaceholder.typicode.com"

export default class LocalStorage extends Component{

    state = {
        users: [],
        localdata: [],
        count: 0
    }

    componentDidMount(){
        const url = `${apiurl}/users/`
        axios.get(url).then(response => response.data)
        .then(data => {
            this.setState({users: data})
            console.log(this.state.users)
        })

        try{
            const json = localStorage.getItem("API Data")
            const userdata = JSON.parse(json)
            if(userdata){
                this.setState(() => ({localdata: userdata}))
            }
        }
        catch(e){

        }
    }

    componentDidUpdate(){
        const json = JSON.stringify(this.state.users);
        localStorage.setItem("API Data", json);
        const newjson = JSON.stringify(this.state.localdata);
        localStorage.setItem("Local Data", newjson);
     }

     deleteLocalData = (user, index) => {
        const newLocalData = [...this.state.localdata];
        newLocalData.splice(index, 1);
        this.setState({localdata: newLocalData})        
        alert("User " + user.name + " is deleted")
    }

    render() {
        return (
            <div className = "container">
                <div className = "col-xs-8">
                    <h2>React User details </h2>
                    <p>The length of the users from <b>API: {this.state.users.length}</b></p>
                    <p>The length of the users from <b>Local Storage: {this.state.localdata.length}</b></p>
                    {
                        this.state.localdata.map((user,index) => ( 
                            <div className="container-fluid">
                                <div className = "row">
                                    <div className = "col-4">
                                        <p><b>{user.id}) {user.name}</b></p><br/>
                                    </div>
                                    <div className = "col-4">
                                        <button className = "btn btn-danger" onClick = {(e) => {this.deleteLocalData(user, index)}} >Delete User</button>
                                    </div>
                                </div>
                            </div>



                            // <div className = "card">
                            //     <div className = "card-body">
                            //         <h5 className = "card-title">{user.name}</h5>
                            //         <h6 className = "card-subtitle mb-2 text-muted">{user.email}</h6>
                            //         <button className = "btn btn-danger" onClick = {(e) => {this.deleteLocalData(index)}} >Delete User</button>
                            //     </div>
                            // </div>
                        ))
                    }                    
                </div>
            </div>
        )
    }
}