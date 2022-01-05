import React, { useState } from "react"
import { useParams } from 'react-router-dom'


const ChangeName = () => {
    const params = useParams()
    const [name, setName] = useState(params.name || 'Yosianus')
    const [aname, setAName] = useState('Antonio')

    function changeName() {
        // cara 1: useState tambahan
        const oldName = name
        setName(aname)
        setAName(oldName)

        // cara 2: conditional
        // setName(name === 'Budi' ? 'Fikri' : 'Budi')
    }
    return (
        <>
            <p>
                Edit <code>{name}</code> and save to reload.
            </p>
            <button onClick={() => changeName()}>Change name</button>
            
        </>
    )
}

export default ChangeName