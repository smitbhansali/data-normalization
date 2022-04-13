import React from 'react'

const Home = () => {
    return (
        <div className='container my-5'>
            <div className='container border border-primary my-5 py-5 px-5' style={{ borderRadius: "20px" }}>
                <h1 className='my-2'>Data Normalization</h1>
                <p className='my-3 fs-5'>
                    Normalization is generally required when we are dealing with attributes on a different scale, otherwise, it may lead to a dilution in effectiveness of an important equally important attribute(on lower scale) because of other attribute having values on larger scale.
                    In simple words, when multiple attributes are there but attributes have values on different scales, this may lead to poor data models while performing data mining operations. So they are normalized to bring all the attributes on the same scale.
                </p>
                <h3>
                    Methods of Data Normalization –
                </h3>
                <ul className='fs-5'>
                    <li>Decimal Scaling</li>
                    <li>Z-Score</li>
                    <li>Min-Max Scaling</li>
                </ul>
            </div>
            <div class="clearfix fs-5 border border-success px-5 py-5 my-5" style={{ borderRadius: "20px" }}>
                <h2 className='my-3'>Decimal Scalling</h2>
                <img src="https://media.geeksforgeeks.org/wp-content/uploads/20190414090925/decimal-scaling1.png" class="col-md-6 float-md-end mb-3 ms-md-3" alt="..." />

                <p>
                    It normalizes by moving the decimal point of values of the data. To normalize the data by this technique, we divide each value of the data by the maximum absolute value of data. The data value, vi, of data is normalized to vi‘ where j is the smallest integer such that max(|vi‘|) is less than 1.
                </p>

                <p>
                    Example –
                </p>
                <p>Let the input data is: -10, 201, 301, -401, 501, 601, 701</p>

                <p>To normalize the above data,<br />
                    Step 1: Maximum absolute value in given data(m): 701<br />
                    Step 2: Divide the given data by 1000 (i.e j=3)</p>

                <p>Result: The normalized data is: -0.01, 0.201, 0.301, -0.401, 0.501, 0.601, 0.701</p>
            </div>
            <div class="clearfix fs-5 border border-success px-5 py-5 my-5" style={{ borderRadius: "20px" }}>
                <h2 className='my-3'>Min-Max Scalling</h2>
                <img src="https://media.geeksforgeeks.org/wp-content/uploads/20190327210233/min-max-normalization1.png" class="col-md-6 float-md-end mb-3 ms-md-3" alt="..." />

                <p>
                    In this technique of data normalization, linear transformation is performed on the original data. Minimum and maximum value from data is fetched and each value is replaced according to the following formula.
                </p>

                <p>
                    Where A is the attribute data,<br />
                    Min(A), Max(A) are the minimum and maximum absolute value of A respectively.<br />
                    v’ is the new value of each entry in data.<br />
                    v is the old value of each entry in data.<br />
                    new_max(A), new_min(A) is the max and min value of the range(i.e boundary value of range required) respectively.
                </p>
            </div>
            <div class="clearfix fs-5 border border-success px-5 py-5 my-5" style={{ borderRadius: "20px" }}>
                <h2 className='my-3'>Z-Score Normalization</h2>
                <img src="https://media.geeksforgeeks.org/wp-content/uploads/20190327204301/Z-score-normalization1.png" class="col-md-6 float-md-end mb-3 ms-md-3" alt="..." />

                <p>
                    In this technique, values are normalized based on mean and standard deviation of the data A. The formula used is:
                </p>

                <p>
                    v’, v is the new and old of each entry in data respectively. σA, A is the standard deviation and mean of A respectively.
                </p>
            </div>
        </div>
    )
}

export default Home