import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <div>
      <div className="row">
  <div className="col-sm-6 mb-3 mb-sm-0">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">What are we?</h5>
        <p className="card-text">We use real-time data to show bus's location,speed and estimated arrival time for your convenience.</p>
        <a href="/" className="btn btn-primary">Need Help</a>
      </div>
    </div>
  </div>
  <div className="col-sm-6 mb-3 mb-sm-0">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">More about US</h5>
        <p className="card-text">Follow our Social Media handle to check latest features,city launches or partnerships.</p>
        <a href="/" className="icon"><i className="ri-instagram-fill"></i></a>
          <a href="/" className="icon"><i className="ri-facebook-box-fill"></i></a>
           <a href="/" className="icon"><i className="ri-twitter-x-fill"></i></a>
    </div>
  </div>
</div>
    </div>
    </div>
  )
}

export default Footer
