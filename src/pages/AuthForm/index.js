import React, {useState, useEffect} from 'react'
import { useNavigate } from "react-router-dom";
import "./style.css"
import API from '../../utils/API';


export default function AuthForm(props) {
    // console.log(props,"props?")
    const navigate = useNavigate();
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    useEffect(() => {
        if (props.user_id > 0) {
          navigate(`/ `);
        }
      },);
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
                password: password,
            }).then(data=>{
                console.log(data)
                navigate("/");
                localStorage.setItem("username",data.username);
                props.setUserId(data._id);
                props.setUsername(data.username);
                // props.setToken(data.token);
            }).catch(err=>{
                console.log(err);
            })
        }else {
            API.signup({
              username: username,
              password: password,
            })
              .then((data) => {
                console.log(data);
                navigate("/login");
                localStorage.setItem(data);      
                props.setUserId(data.user.id);
                props.setUsername(data.user.username);
            })
            .catch((err) => {
                console.log(err);
            });
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