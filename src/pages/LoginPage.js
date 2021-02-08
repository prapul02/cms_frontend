import React, {useState} from 'react';
import './styles.css';
import {Jumbotron} from 'react-bootstrap';
import LoginForm from '../components/LoginComp'


const Entry = () =>  { 
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleonChange = (e) => {
        const {name, value} = e.target

        switch(name){
            case "email":
                setEmail(value)
                break
            case "password":
                setPassword(value)
                break
             default:
                 break       

        }
    }

    const handleonSubmit = (e) => {
        e.preventDefault();

        if(!email | !password){
            return alert("Fill up the form")
        }
        fetch("https://safe-hollows-51478.herokuapp.com/admin/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",

      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        alert("Login Successfull");
        window.location.href = "/home";
      })
      .catch((error) => {
        alert("Please enter the correct details")
        console.error(error);
      });

        console.log(email, password)
    }



    return(
        <div className="entry-page bg-info">
           <Jumbotron className="form-box">

            {<LoginForm 
               handleonChange={handleonChange}
               handleonSubmit={handleonSubmit}
               email={email}
               password={password}         
               />}
           </Jumbotron>
        </div>
    )
}

export default Entry;