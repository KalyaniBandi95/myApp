import React, {Component} from "react";

export default class Calculate extends Component{
    constructor(props){
        super(props)
        this.state = {count:0}
        // this.state = {dec:10}
    }
    componentDidUpdate(){
        // alert("State is updated")
    }
    inc = () => {
    //    this.state.count = this.state.count + 1
    this.setState((prestate) => {
        return {
            count : prestate.count + 1
        }
    })
    console.log(this.state)
    }
  
    dec = () =>{
        this.setState((poststate) => {
            return {count : poststate.count - 1}
        })
    }
    reset = () => {
        this.setState((reset) => {
            return {count: 0}
        })
    }
    render(){
        return(
            <div>
                The Current value is {this.state.count} <br/>
                <button onClick={this.inc}>Increment</button>
                <button onClick={this.dec}>Decrement</button>
                <button onClick={this.reset}>Reset</button>
            </div>
        )
    }
}