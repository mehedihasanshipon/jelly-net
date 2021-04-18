import React from "react";

const PackagesCard = ({ packages }) => {
  return (
    <div className="col-md-6 col-lg-4 my-3">
      <div className="package-card shadow">
        <div className="package-title text-center">
          <h5>{packages.packageType}</h5>
        </div>
        <div className="card-content p-4">
          <div className="row card-top">
            <div className="col-md-6">
              <div className="content">
                <h6 style={{color:'#42B7E2'}}>{packages.int}</h6>
                <h4>{packages.speed}</h4>
                <small>Download Speeds</small>
                <h6 className="pt-3" style={{color:'#42B7E2'}}>{packages.tv}</h6>
                <h4>{packages.chanels}</h4>
                <small>Chanels</small>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card-img d-flex align-items-center h-100">
                <img className="" src={packages.image} alt="" />
              </div>
            </div>
          </div>
          <hr/>
          <div className="card-bottom">
              <li>Multi-device streaming</li>
              <li>Download shows quickly</li>
              <li>Download large files</li>
              <h4>{packages.price}</h4>
              <button className="button-primary">Shop Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackagesCard;
