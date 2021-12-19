import axios from 'axios';
import React, { useState } from 'react';
import './signIn.css';
export default function SignIn(props){
    const{isUserLoggedIn,userToRegeister}=props;
    const[username,setUsername]=useState("");
    const[password,setPassword]=useState("");
   
    const[message,setmessage]=useState("");
    let handleSignUp = () =>{
       userToRegeister(true);
       isUserLoggedIn(false);
    }
    let handleSubmit = async (e) =>{
        e.preventDefault()
        const data = await axios.post(`https://dynamicportfoliobackend.herokuapp.com/signin`,{username,password})
        isUserLoggedIn(data.data.status)
        setmessage(data.data.message)
    }
   

    return(
        <div class="container1" onclick="onclick">
    <div class="top"></div>
    <div class="bottom"></div>
    <div class="center">
    <form onSubmit={(e)=>{handleSubmit(e)}}>
    <h2>Please Sign In</h2>
      <input type="text" id="login" class="fadeIn second" name="login" value={username} onChange={(e)=>setUsername(e.target.value)} placeholder="email id"/>
      <input type="text" id="password" class="fadeIn third" name="login" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="password"/>
      <input type="submit" class="fadeIn fourth btn btn-primary" value="Log In"/>
    </form>
    <div id="formFooter">
      <a class="underlineHover" href="#" onClick={handleSignUp}>Not a member?</a>
      <span>{message}</span>
    </div>
    </div>
   
  
    

</div>
    );
}