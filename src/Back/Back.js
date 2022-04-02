import React from "react";
import Nav from './Nav';
import Side from './Side';
import Main from './Main';
import Footer from './Footer';

import { Navigate } from 'react-router-dom';//utk memproteksi hlaman admin


const Back = () => {

  if ((sessionStorage.getItem('token') === 'undefined') || (sessionStorage.getItem('token') === null ) ) {//kalau blm meakukan proses login maka gabisa masuk ke hal admin, jdi hrs ke hal login dlu
    return <Navigate to='/login' /> 
  }

  return (
    <>
      <div className="row mb-2">
        <div>
          <Nav />
        </div>
      </div>

      <div className="row">
        <div className="col-4">
          <Side />
        </div>
        <div className="col-8">
          <Main />
        </div>
      </div>

      <div className="row mt-4">
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Back;
