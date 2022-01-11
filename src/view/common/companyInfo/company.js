import React from 'react'
import Navbar from '../navbar/navbar'
import "./company.css"

function Company() {
    return (
        <div style={{ width: "90%", margin: "auto" }}>
            <Navbar />


            <div>
<div className='col-6 row company-card m-auto'>
<div className='col-lg-6 col-md-12 col-sm-12'>
<img src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format" class="card-img py-3" alt="..." />
</div>
<div className='col-lg-6 col-md-12 col-sm-12'>
<h6 className='company-value pt-1 mt-3'><span className='company-key'>Company:</span> Geeksynergy Technologies Pvt Ltd </h6>
<h6 className='company-value pt-1 mt-3'><span className='company-key'>Address:</span> Sanjayanagar, Bengaluru-56 </h6>
<h6 className='company-value pt-1 mt-3'><span className='company-key'>Phone:</span> XXXXXXXXX09</h6>
<h6 className='company-value pt-1 mt-3'><span className='company-key'>Email:</span> XXXXXX@gmail.com </h6>
</div>
</div>
</div>

        </div>
    )
}

export default Company
