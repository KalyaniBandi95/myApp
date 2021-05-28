import React from "react";

const Action = (props) => {
    return (
        <div>
               <p> Welcome to Action stateless function</p>
               <button className = "btn btn-danger" disabled = {!props.hasData}>Delete</button><br/>
        </div>
    )
}


export default Action

// export default class Action extends Component{
//     render(){
//         return(
//             <div>
//                 <p> Welcome to Action</p>
//                 <button disabled = {!this.props.hasData}>Delete</button><br/>
//             </div>
//         )
//     }
// }