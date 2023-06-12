import React { useState } from 'react'
import "./style.css"

const ListPage = () => {
    // const [title, setTitle] = React.useState("");
    // const [devices, setDevices] = React.useState("");
    const [title, setTitle] = useState("");
    const [devices, setDevices] = useState("");

    const handleButtonClick = (title) => {
        setTitle(title);
        setDevices(devices);
    }