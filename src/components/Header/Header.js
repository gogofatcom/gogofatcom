import React, { useContext, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';

import "./header.css"
import { Languagecontext } from '../../contex/language';


export default function Header() {
  const {contextlang,setContextlang}=useContext(Languagecontext);
  return (
    <>

      <nav id='headernav' className="navbar navbar-expand-lg text-end ">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to='/'>Movie App</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse me-auto" id="navbarNavAltMarkup">
            <div  id="navitemridht" className="navbar-nav navbar-toggler-right ">
              
              <NavLink className="nav-link"
                to='/Watchedmovies'>Watched List</NavLink>
                <li  className=" bg-warning">
                  <select >
                    <option  onClick={ ()=> setContextlang('en') } > en </option>
                    <option  onClick={ ()=> setContextlang('ar') }> ar </option>
                  </select>
                </li>

                
            </div>
          </div>
        </div>
      </nav>

    </>
  )
}