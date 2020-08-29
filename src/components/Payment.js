import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "gatsby"


const Payment = () => {
    return (
        <div>
          <p style={{color:"green",
           fontWeight:"bold"}}> Mpesa Till No is : 0000
           <br/>
           We deliver within 20 minutes
           <br/>
          <Link to="/about">click here for all prices</Link> 
           </p>  
        </div>
    )
}

export default Payment
