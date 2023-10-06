import React, { useContext, useState } from 'react';
import { useSelector } from 'react-redux';
import { FaHeart } from "react-icons/fa";


import "./header.css"
import { Languagecontext } from '../../contex/language';
import { Link } from 'react-router-dom';


export default function Header() {
  const {contextlang,setContextlang}=useContext(Languagecontext);

  const watchedlist = useSelector((state) => state.wishlist);
  return (
    <>

      <nav id='headernav' className="navbar navbar-expand-lg p-2">
        <div className="container-fluid">
          <Link className="navbar-brand" to='/'>Movie App</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse me-auto" id="navbarNavAltMarkup">
            <div  id="navitemridht" className="navbar-nav   ms-auto navbar-toggler-right ">
              
              
                <Link >
                  <select  style={{border:'0px' ,marginTop:'10px', marginRight:'10px'}} id='headernav'>
                    <option   onClick={ ()=> setContextlang('en') } > en </option>
                    <option  onClick={ ()=> setContextlang('ar') }> ar </option>
                  </select>
                </Link>
                <div>
               <div className=" position-relative " >
                <Link className="navbar-brand"
                to='/Watchedmovies'>Watched List <FaHeart /> </Link>
                </div>
                  <div className=" top-0 end-0  position-absolute">
                     <p> {watchedlist.length}</p>
                  </div>
                  </div>
            </div>
          </div>
        </div>
      </nav>

    </>
  )
}