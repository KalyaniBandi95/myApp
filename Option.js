import React, {Component} from "react";

const Option = (props) => {
    return(
        <div>
            <br/>
            Hi <b>{props.collectdata}</b>, This is an Option Component stateless function 
        
        <button className = "btn btn-danger" onClick = {(e) => {props.singleDelete(props.collectdata)}} >Delete User</button>
        </div>
    )
}

export default Option




// export default class Option extends Component{
//     render(){
//         return(
//             <div>
//                 <br/>
//                 This is from Option Component
//                Hi {this.props.collectdata}
               
//             </div>
//         )
//     }
// }