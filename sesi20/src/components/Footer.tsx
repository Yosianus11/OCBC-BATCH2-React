import React, { useState } from 'react';

interface IProps {
}



const Footer = (props: IProps,) => {
    const [name, setName] = useState('Yosianus');

    const changeName = (names:string) => {
        setName(name==='Yosianus'? names : 'Yosianus');
    }
    return (
        <>
            <div className="App-footer">
                <p>&copy; {name} - 2021</p>
            </div>
            <button onClick={() =>{changeName('Antonio')}}>Ganti nama</button>
        </>


    )
}

export default Footer