import React, { Component }from "react";

export default class Expansion extends Component{

    constructor(props){
        super(props)
        this.state = {dispalyInfo:false}
    }

    toggle = () => {
        this.setState({
            dispalyInfo: !this.state.dispalyInfo
        })
    }

    render() {
        return (
            <div>
                <p>This is an Expansion Component</p>
                <h3>User Details goes here </h3>
                {
                    this.state.dispalyInfo ? (
                        <div>
                            <p>
                                <h2>Hi Kalyani, Today we are learning React JS on Stateless functions and local Storage</h2>
                            </p>
                            <button className = "btn btn-info" onClick = {this.toggle}>Show Less</button>
                        </div>
                    ): (
                        <div><button className = "btn btn-info" onClick = {this.toggle}>Read More</button></div>
                    )
                }
            </div>
        )
    }

}