import React,{useState} from 'react';
import './CreateAccount.css'
import { Link ,useNavigate} from 'react-router-dom';

import { toast } from 'react-toastify';

const CreateAccount = () => {
  const navigate = useNavigate()
  const [name, setName] =useState("")
  const [email, setEmail] =useState("")
  const [password, setPassword] =useState("")

  //Toast Function
  const notifyA = (msg) => toast.error(msg);
  const notifyB = (msg) => toast.success(msg);
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const passRegs = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/

  const postData = () => {
    //checking email
    if(!emailRegex.test(email)){
      notifyA("Invalid Email")
      return
    }
    else if(!passRegs.test(password)){
      notifyA("Password must contain at least 8 characters, including at least 1 number and 1 includes both ower and uppercase letters and special characters for example #,?,!")
      return
    }




    fetch("http://localhost:5000/signup", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
      })
    })
    .then(res => res.json())
    .then(data => {
      if(data.error){
      notifyA(data.error)
    }
    else{
      notifyB(data.message)
      navigate("/login")
    }

      console.log(data);
    });
  }
  


  return (
    <div className="container-Createacc ">
      <h2>Create Account</h2>
      {/* <form action="/createaccount" method="post"> */}
        <input type="text" name="name" value={name} onChange={(e)=>setName(e.target.value)}  placeholder="Name" required />
        <input type="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email" required />
        <input type="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)}  placeholder="Password" required />
        
        <input type="submit" value="Sign Up" onClick={()=>{postData()}} />
        <p className="para">Already have an account? <Link className="loginLink" to="/login">Login</Link></p>
      {/* </form> */}
    </div>
  );
}

export default CreateAccount;
