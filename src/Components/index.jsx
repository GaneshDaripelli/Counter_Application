import React from 'react'

import {useState} from 'react'

import './index.css'

const Counter = () => {

    const [number, setNumber] = useState(0)

    const increment = () => {
        setNumber(number+1)
    }
    const decrement = () => {
        setNumber(number-1)
    }
    const reset = () => {
        setNumber(0)
    }


    return( 
        <div className='mainDiv'>
            <h1>Counter</h1>
            <p className="p">{number}</p>
            <button onClick={increment} className='button'>Increment</button>
            <button onClick={decrement} className='button'>Decrement</button>
            <button onClick={reset} className='button'>Reset</button>
        </div>
    )

}
export default Counter