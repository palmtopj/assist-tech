import React from 'react'
import "./style.css"
import {useLocation, useParams} from 'react-router-dom';

const DevicesPage = (props) => {
    const location = useLocation();
    const params = useParams();
    const [tools, setTools] = React.useState([]);
    const [title, setTitle] = React.useState("");
    const [devices, setDevices] = React.useState([]);
    console.log(params);
    console.log(props);

    React.useEffect(()=>{
    fetch(`/api/category/${params.id}`)
     .then (res=>res.json())
 .then (data=>setTools(data.tool))
},[params.id])
   // console.log(location.state.category)
    
//console.log(location.state.category)
    const handleButtonClick = (title) => {
        setTitle(title);
        setDevices(devices);
        // temp devices
        const devicesList = ['Item 1', 'Item 2', 'Item 3'];
        setDevices(devicesList);
    };

    return (
        <div>
            <h1>{title}</h1>
            <ul>
                {/* {devices.map((device, index) => (
                    <li key={index}>{device}</li>
                ))} */}
                 {tools && tools.map((tool, index) => (
                    <li key={index}>{tool.toolName}</li>
                ))}
            </ul>
            <button onClick={() => handleButtonClick('Title 1')}>Title 1</button>
            <button onClick={() => handleButtonClick('Title 2')}>Title 2</button>
            <button onClick={() => handleButtonClick('Title 3')}>Title 3</button>
        </div>
    );
};

export default DevicesPage;
