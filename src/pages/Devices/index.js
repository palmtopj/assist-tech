import React from 'react'
import "./style.css"

const DevicesPage = () => {
    const [title, setTitle] = React.useState("");
    const [devices, setDevices] = React.useState([]);

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
                {devices.map((device, index) => (
                    <li key={index}>{device}</li>
                ))}
            </ul>
            <button onClick={() => handleButtonClick('Title 1')}>Title 1</button>
            <button onClick={() => handleButtonClick('Title 2')}>Title 2</button>
            <button onClick={() => handleButtonClick('Title 3')}>Title 3</button>
        </div>
    );
};

export default DevicesPage;
