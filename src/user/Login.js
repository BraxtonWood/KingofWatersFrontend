import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {useState, useEffect} from 'react';

const Login = ({setUser, setToken}) => {
    const [userMessage, setUserMessage] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    let navigate = useNavigate();
    const handleSubmit = (event) =>{
        event.preventDefault();
        /*FETCH User*/
        fetch('LINK TO API', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    email: email,
                    password: password,
                }
            )
        })
        .then(response => response.json())
        .then(result => {
            console.log(result);
            setEmail('');
            setPassword('');
            if (result.message === "you're logged in!"){
                setUserMessage("You're logged in!");
                window.localStorage.setItem("user", result.user);
                window.localStorage.setItem("token", result.token);
                setUser(result.user);
                setToken(result.token);
                navigate('/user');
            } else if (result.error === "CredentialsError"){
                setUserMessage("Email or Password is incorrect. Please try again");

            } else {
                setUserMessage("There was an error logging in. Please try again");
            }

        })
        .catch(err=>console.error(err));
    }




    return (
        <>
        <h5>{userMessage}</h5>
        <form onSubmit={handleSubmit} className='loginform'>
            <label>Email</label><br/>
            <input className='loginemailentry' type='text' value={email} 
                onChange={(event) => setEmail(event.target.value)} required/><br/>
            <input className='loginpasswordentry' type='password' value={password}
                onChange={(event) => setPassword(event.target.value)} required/><br/>
            <input className='submitbutton' type='submit'></input>
        </form>
        
        </>
    )
}
export default Login;
