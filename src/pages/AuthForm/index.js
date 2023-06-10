import React, {useState} from 'react'
// import "./style.css"
import API from '../../utils/API';

export default function AuthForm(props) {
    const {username, setusername} = useState("");
    const {password, setpassword} = useState("");
    const handleChange = e=>{
        if(e.target.name==="username"){
        setusername(e.target.value)
        }else {
            setpassword(e.target.value)
        }
    }
    const handleSubmit = e=>{
        e.preventDefault();
        if(props.usage==="Login"){
            API.login({
                username: username,
                password: password
            }).then(data=>{
                console.log(data)
            }).catch(err=>{
                console.log(err);
            })
        }
    }
    return (
        <main className="Login">
            <h1>{props.usage}</h1>
            <form onSubmit={handleSubmit}>
                <input name="username" onChange={handleChange} value={username} placeholder='username'></input>
                <input name="password" onChange={handleChange} value={password} placeholder='password'></input>
                <button>{props.usage}</button>
            </form>
        </main>
    )
}