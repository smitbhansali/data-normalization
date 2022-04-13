import React from 'react'
import { useRef, useState } from 'react'

const Minmax = () => {
    const data = useRef();
    const newmin = useRef();
    const newmax = useRef();

    const [result, setResult] = useState([]);

    const handleSubmit = (e) => {
        const dataarray = JSON.parse("[" + data.current.value + "]");
        const newdataarray = [];
        const oldmax = Math.max(...dataarray);
        const oldmin = Math.min(...dataarray);
        const newmax1 = parseInt(newmax.current.value);
        const newmin1 = parseInt(newmin.current.value);
        for (let i = 0; i < dataarray.length; i++) {
            newdataarray[i] = ((dataarray[i] - oldmin) * (newmax1 - newmin1) / (oldmax - oldmin)) + newmin1;
        }
        setResult(newdataarray);
        data.current.value = "";
        newmin.current.value = "";
        newmax.current.value = "";
    }
    return (
        <div className='container my-5'>
            <h1 className='text-center my-5'>Min-Max Scalling</h1>
            <input className="form-control my-5" type="text" placeholder="Enter Data for Example: 1,2,3" aria-label="default input example" ref={data}></input>
            <input className="form-control my-5" type="text" placeholder="Enter new Max" aria-label="default input example" ref={newmax}></input>
            <input className="form-control my-5" type="text" placeholder="Enter new Min" aria-label="default input example" ref={newmin}></input>
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
export default Minmax