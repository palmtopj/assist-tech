import React from 'react'
import "./style.css"
import {useNavigate} from 'react-router-dom';


export default function Home() {
    const navigate = useNavigate();
    const [category, setCategory] = React.useState([]);
    React.useEffect(()=>{
        fetch("/api/category")
        .then (res=>res.json())
        .then (data=>setCategory(data))
    },[])
    console.log(category);
    return (
        <main className="Home">
            <h2>Please choose a category below</h2>
            <div className="button-container">
               <div className="button-row">
                {
                   category && category.map((item,index)=>{
                         return <button className="large-button" key={index} id={item._id} name={item.categoryname} onClick={()=>{item && item._id && navigate(`/category/${item._id}`)}}>{item.categoryname}</button>
                       // console.log(item)
                    }
                    )
                }
                {/* <button className="large-button" onClick={()=>{
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
                <button className="large-button">Other</button> */}
                </div>
            </div>
        </main>
    )
}