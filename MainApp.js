import React, {Component} from "react"
import Header from "./Header";
import Footer from "./Footer";
import Action from "./Action";
import AddOption from "./AddOption";
import Options from "./Options";
import Calculate from "./Calculate";
import Expansion from "./Expansion";

export default class MainApp extends Component{

    componentDidMount(){
        try{
            const json = localStorage.getItem("mydata")
            const userdata = JSON.parse(json)
            if(userdata){
                this.setState(() => ({userdata}))
            }
        }
        catch(e){

        }
    }

    componentDidUpdate(){
       const json = JSON.stringify(this.state.userdata);
       localStorage.setItem("mydata", json)
    }

    constructor(props){
        super(props)
        this.state = {
            userdata : []
        }
    }

    addUserData = (data) => {
        if(!data){
            return 'Enter Correct Value'
        }
        else if(this.state.userdata.indexOf(data) > -1){
            return 'The data is alreday exist.'
        }
        this.setState((prevstate) => {
            return {
                userdata: prevstate.userdata.concat(data)
            }
        })
    }

    deleteAllData = () => {
        this.setState(() => {
            return {
                userdata : []
            }
        })
    }

    deleteSingleData = (input) => {
        this.setState((prevstate) => ({
            userdata: prevstate.userdata.filter((item) => input !== item)
        }))
    }

    render(){
        const Users = ['Kalyani', 'Krithika', 'Malini', 'Ranjani'];
        const headerMsg = "Hi I'm Header from MainApp"
        return(
            <div>
                <Header message = {headerMsg}/>
                    <p> Welcome to MainApp</p>
                    <Expansion/>
                    <Action hasData = {this.state.userdata.length > 0}/><br></br>
                    <AddOption addUserdata = {this.addUserData}/>
                    {/* <Options user = {Users}/> */}
                <Footer message = "Hi I'm Footer from Main App"/> 
                    <Options user = {this.state.userdata}  deleteAll = {this.deleteAllData} deleteSingle = {this.deleteSingleData}/><br/>
                <Calculate/>
            </div>
        )
    }
}

MainApp.defaultProps = {
    userdata : []
}