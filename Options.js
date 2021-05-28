import React from "react";
import Option from "./Option";
import ReactApi from "./ReactApi";


const Options = (props) => {
    return(
        <div>
            {/* {props.user.map((senddata) =>  <div key = {senddata}> <p> Hi {senddata} from stateless function</p> </div>)} */}
           {
               props.user.map((senddata) => <Option key={senddata} collectdata = {senddata} singleDelete = {props.deleteSingle}/>)
           }
           <button className = "btn btn-danger" onClick = {props.deleteAll}>Delete All</button>
           <ReactApi/>
        </div>
    )
}

export default Options


// export default class Options extends Component{
//     render(){
//         return(
//             <div>
//                 {this.props.user.map((senddata) =>  <div key = {senddata}> <p> Hi {senddata}</p> </div>)}
//                {/* {
//                    this.props.user.map((senddata) => <Option key={senddata} collectdata = {senddata}/>)
//                } */}
//                <button onClick = {this.props.deleteAll}>Delete All</button>
//             </div>
//         )
//     }
// }