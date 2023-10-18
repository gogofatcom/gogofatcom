import { useNavigate } from "react-router-dom";
import React from "react";
export default  function Nowatchedlist(){
//back to home
const navigat=useNavigate();
    const redicthome = (id) => {
      navigat(`/`);
      console.log("navigate to home");
      
    }
    

    return(<>
            <div style={{ position:'absolute',top:'30%', left:'40%' ,textAlign:'center' }}> 
                <img src='./Group.png'  />
                <p>No Movies in watch list </p>
                <button  onClick={redicthome} for="inputPassword6" className="btn "> back to Home </button>
            </div>

    </>)
}