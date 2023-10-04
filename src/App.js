
import './App.css';
import React, { useState } from 'react';


import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { Languagecontext } from './contex/language';
import Header from './components/Header/Header';

import Home from './pagesApp/Home';

import Searchresult  from './pagesApp/Searchresult';
import MovieDetial from './pagesApp/MovieDetial';
import Watchedmovies from './pagesApp/Watchedmovies';
import Nowatchedlist from './pagesApp/Nowatchedlist';
import Notfound from './pagesApp/Notfound';



 


function App() {
 const [contextlang,setContextlang]=useState('en')
 
  return (
   <>
   
   <BrowserRouter>
   <Languagecontext.Provider value={{contextlang,setContextlang}}>
      <div className={contextlang==='ar'?'text-right':'textleft'}
      dir={contextlang==='ar'?'rtl':'ltr'}>
   

   <Header/>
   <Routes>
     
    <Route path='/' element={ <Home/>} /> 
    
    <Route path='/search/:name' element={ <Searchresult />} />
    <Route path='/MovieDetial/:id' element={ <MovieDetial />} />
    <Route path='/Watchedmovies'    element={ <Watchedmovies/>}/>
    <Route path='/Nowatchedlist'  element={<Nowatchedlist/> }   />
    <Route path='/*' element={<Notfound/>} />
     
    </Routes>
    </div>
    </Languagecontext.Provider>
   </BrowserRouter>
     
     
      
   </> 
  );
}

export default App;
