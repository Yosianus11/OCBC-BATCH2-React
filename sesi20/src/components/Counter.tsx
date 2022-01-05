import { cleanup } from '@testing-library/react';
import React, { useState, useEffect } from 'react';

const Counter = () => {
    const [count, setCounter] = useState(0)

    useEffect(() => {

        window.addEventListener('blur', () => {
            console.log('Efect Berjalan')
        })

        return () => {
            window.removeEventListener('blur',()=>{})
        }
    })

    useEffect(() => {
        //componentDidMount
        console.log('State berhasil di buat')
    }, [])

    useEffect(() => {
        // component DI update()
        if (count > 0) console.log('State berhasil di ubah')
        return () => {cleanup};
    },
        // shouldComponentUpdate()
        [count])

    return (
        <div>
            <h2>Let's Count</h2>
            <h3>{count}</h3>

            <button
                onClick={() => { setCounter(count + 1) }}
            >
                Hit Me!
            </button>
        </div>
    )
}

export default Counter