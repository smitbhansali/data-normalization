import React from 'react'
import { useRef, useState } from 'react'

const Zscore = () => {
    const data = useRef();
    const mean = useRef();
    const sd = useRef();
    const [result, setResult] = useState([]);

    const handleSubmit = (e) => {
        const dataarray = JSON.parse("[" + data.current.value + "]");
        const newdataarray = [];
        const mean1 = parseInt(mean.current.value);
        const sd1 = parseInt(sd.current.value);
        for (let i = 0; i < dataarray.length; i++) {
            newdataarray[i] = ((dataarray[i] - mean1) / sd1);
        }
        setResult(newdataarray);
        data.current.value = "";
        mean.current.value = "";
        sd.current.value = "";
    }
    return (
        <div className='container my-5'>
            <h1 className='text-center my-5'>Z-Score Normalization</h1>
            <input className="form-control my-5" type="text" placeholder="Enter Data for Example: 1,2,3" aria-label="default input example" ref={data}></input>
            <input className="form-control my-5" type="text" placeholder="Enter Population Mean" aria-label="default input example" ref={mean}></input>
            <input className="form-control my-5" type="text" placeholder="Enter Population Standard Deviation" aria-label="default input example" ref={sd}></input>
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

export default Zscore