import { NavLink } from "react-router-dom";

const Header = () =>{
    return (
     <header>
         <NavLink to = "/" exact = {true}>Login</NavLink><br/>
         <NavLink to = "/login" exact = {true}>Login</NavLink><br/>
         <NavLink to = "/register" exact = {true}>Register</NavLink><br></br>
     </header>
    )
 }

 export default Header 