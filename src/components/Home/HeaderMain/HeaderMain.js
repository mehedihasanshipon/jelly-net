import React from 'react';
import headerImg from '../../../images/header-sidebar.jpg'

const HeaderMain = () => {
    return (
        <main style={{height:'550px'}} className="row d-flex align-items-center header-main ">
            <div className="col-md-5 offset-md-1 gx-5 gy-5 banner">
                <p>JELLYNET BROADBAND INTERNET</p>
                <h1 className="d-none d-lg-block">Our Plans Give You More Than Ever</h1>
                <p className="second text-secondary">Surf, stream, chat and game with fast speeds. Equipment included and no extra monthly fees.</p>
                <h4 className="d-none d-lg-block">$ 39 .99/Mo</h4>
                <div className="d-flex align-items-center ">
                    <button className="button-primary">Request a quote</button>
                    <span className="d-none d-lg-block" style={{fontSize:'20px'}}>or Call Now 800.567.1234</span>
                </div>
            </div>
            <div className="col-md-6 gx-3 d-none d-md-block">
                <img className="img-fluid" src={headerImg} alt=""/>
            </div>
        </main>
    );
};

export default HeaderMain;