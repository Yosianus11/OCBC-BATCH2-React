import React, { useState } from "react"
import { useParams,  useNavigate, Routes, Route } from 'react-router-dom'
import NameChange from './states/NameChange'

interface IProps {
    mess: string;
}

const States = (props: IProps) => {
    const navigate = useNavigate()
    const { path } = useParams();
    const [name, setName] = useState('')


    const showNameChange = () => {
        navigate(`/States/${name}`)
    }
    console.log(path)
    return (
        <>
            <h2>Enter Name:</h2>
            <input name="personName" onChange={(e) => setName(e.target.value)}></input>
            <button onClick={showNameChange}> Show Me</button>
        </>
    )
}
export default States