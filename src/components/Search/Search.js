import React, { useState } from "react"
import "./search.css"
import { Button } from "bootstrap"
import { useNavigate } from "react-router-dom";

export default function Search() {
//get movie name from input
const [inputText, setInputText] = useState("");
const handleChange = (event) => {
    setInputText(event.target.value);
  };

    const navigat=useNavigate();
    const redictmoviesearch = (id) => {
      navigat(`/search/${inputText}`);
      console.log("navigate to search detial");
      console.log(inputText)
    }
    


    return (
        <>
        <div className="searchdiv m-4 " >
        <div className=" g-4 m-4   " >
            <h3>Welcome to our movie app </h3>
            <p>Millions of movies, TV shows and people to discover. Explore now.
           </p>

            <div className="row  ">
                <div className="col-10">
                    <input type="text" id="inputPassword6" onChange={handleChange} className="form-control" aria-describedby="passwordHelpInline"/>
                </div>
                <div class="col-2 ">
                <div >
                    <button  onClick={redictmoviesearch} for="inputPassword6" className="btn "> Search </button>
                </div>
                    
                </div>
            </div>

         </div> 
         </div>  
        </>
    )
}