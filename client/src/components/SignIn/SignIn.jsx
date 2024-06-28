import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import style from './signin.module.css'
import { useDispatch } from 'react-redux'
import { login } from "../../redux/userSlice";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";

const SignIn = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");
    
    const [open, setOpen] = useState(false);

    const handleClick =() => {
        setOpen(!open)
    }
    
    const auth = getAuth();
    const dispatch = useDispatch();

   const handleLogin = (e) => {
      e.preventDefault();
      signInWithEmailAndPassword(auth, email, password)
      .then((userAuth) => {
         dispatch(login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
         }))
         setSuccess("YOU SUCCESSFULLY LOGGED IN!")
      }).catch((error) => {
        alert(error.message)
        setError("SOMETHING WENT WRONG!")
    }
    );
   }

  const handleSignup = (e) => {
     e.preventDefault();
     if(!name && !surname && !email && !password) {
        alert("Please fill all the blanks");
     }
     createUserWithEmailAndPassword(auth, email, password)
     .then((userAuth) => {
        dispatch(login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
        }))
        setSuccess("YOU SUCCESSFULLY SIGN IN!")
     }).catch((error) => {
        alert(error.message)
        setError("SOMETHING WENT WRONG!")
    }
    );

     
  }

  return (
    <div>
        <Navbar/>

        <div className={style.container}>

{
    !open && (
        <div className={style.left}>
        <p>LOG IN TO YOUR ACCOUNT</p>
         <form>
          <input type='text' id="email" placeholder='E-MAIL ADDRESS' value={email} onChange={(e) => setEmail(e.target.value)}></input>
          <input type='password' id="password" placeholder='PASSWORD' value={password} onChange={(e) => setPassword(e.target.value)}></input>
          <button onClick={handleLogin}>LOGIN</button>
          <p className={style.success}>{success}</p>
           <p className={style.error}>{error}</p>
         </form>
      </div>
    )
}
           

{open && (
    <div className={style.left}>
              <p>PLEASE SIGN UP</p>
               <form>
                <input type='text' id="email" placeholder='E-MAIL ADDRESS' value={email} onChange={(e) => setEmail(e.target.value)}></input>
                <input type='password' id="password" placeholder='PASSWORD' value={password} onChange={(e) => setPassword(e.target.value)}></input>
                <input type='text' id="name" placeholder='NAME' value={name} onChange={(e) => setName(e.target.value)}></input>
                <input type='text' id="surname" placeholder='SURNAME' valur={surname} onChange={(e) => setSurname(e.target.value)}></input>
                <button onClick={handleSignup}>SIGNUP</button>
                <p className={style.success}>{success}</p>
                 <p className={style.error}>{error}</p>
               </form>
            </div>
)}
            

            <div className={style.right}>
                <p>{open ? "ALREADY HAVE AN ACCOUNT?" : " WANT TO OPEN AN ACCOUNT?"}</p>
                <button onClick={handleClick}>
                    {open ?  "LOGIN" : "SIGN IN"}</button>
            </div>
           
            <div className={style.another}></div>
        </div>
    </div>
  )
}

export default SignIn