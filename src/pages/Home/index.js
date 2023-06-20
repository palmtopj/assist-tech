import React from 'react'
import "./style.css"
import {useNavigate} from 'react-router-dom';


export default function Home() {
    const navigate = useNavigate();
    return (
        <main className="Home">
            <h2>Please choose a category below</h2>
            <div className="button-container">
               <div className="button-row">
                <button className="large-button" onClick={()=>{
                    navigate("/category",{state:{category:"Keyboards"}})
                }}>Keyboards</button>
                <button className="large-button">Mice</button>
                <button className="large-button">Switches</button>
                <button className="large-button">Braille</button>
                </div>
            </div>
            <div className="button-row">
                <button className="large-button">Speech</button>
                <button className="large-button">Hearing</button>
                <button className="large-button">Portable</button>
                <button className="large-button">Other</button>
                </div>

        </main>
    )
}