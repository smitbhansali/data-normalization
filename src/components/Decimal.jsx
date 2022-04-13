import React from 'react'
import { useRef, useState } from 'react'

const Decimal = () => {
    const data = useRef();
    const power = useRef();
    const [result, setResult] = useState([]);

    const handleSubmit = (e) => {
        const dataarray = JSON.parse("[" + data.current.value + "]");
        const newdataarray = [];
        const power1 = parseInt(power.current.value);
        for (let i = 0; i < dataarray.length; i++) {
            newdataarray[i] = ((dataarray[i] / Math.pow(10, power1)));
        }
        setResult(newdataarray);
        data.current.value = "";
        power.current.value = "";
    }
    return (
        <div className='container my-5'>
            <h1 className='text-center my-5'>Decimal Scalling</h1>
            <input className="form-control my-5" type="text" placeholder="Enter Data for Example: 1,2,3" aria-label="default input example" ref={data}></input>
            <input className="form-control my-5" type="text" placeholder="Enter the power of 10" aria-label="default input example" ref={power}></input>
            <button type="submit my-5" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
            <h3 className='my-5'>Output:</h3>
            {result.map((item, index) => {
                return (
                    <div key={index}>
                        <p>{item}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Decimal