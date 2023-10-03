import React, { useEffect } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";

export default function Watchedmovies() {

    // redirect to no watchedlist
    const navigat=useNavigate();
    const redictnowatchedlist =()=> {
      navigat('/Nowatchedlist');
      console.log("navigate to no ");
      
    }
    

    const watchedlist=useSelector((state)=>state.wishlist);
    console.log(watchedlist);
    useEffect(()=>{
        if (watchedlist.length == 0) {
            redictnowatchedlist();
            
        }
    }  ,[] )
    return (
        <>
 
            {
             
                watchedlist.map((movie)=>(
               <div style={{width:'30em'}}>
                <div className="card m-3 p-1" >
                    <div className="row ">
                        <div className="col-md-4">
                            <img src={`https://image.tmdb.org/t/p/w500//${movie.poster_path}`} 
                            class="img-fluid rounded-start" 
                            style={{width:'12em',height:'15em'}} />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                            <div style={{ display: 'flex', flexDirection: 'row',  justifyContent: 'space-between' }}>
                            <h5 className="card-title">{movie.title}</h5>
                            <img src='../src/assets/iconheart.png' />

                          </div>
                                
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                <p className="card-text mt-4">{movie.overview} </p>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                ))
                
            }
        
    

        </>
    )
}