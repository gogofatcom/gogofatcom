import React, { useEffect } from "react"
import { FaHardHat } from "react-icons/fa";
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import { FaHeart, FaRegHeart } from 'react-icons/fa';

export default function Watchedmovies() {

    // redirect to no watchedlist
    const navigat = useNavigate();
    const redictnowatchedlist = () => {
        navigat('/Nowatchedlist');
        console.log("navigate to no ");

    }


    const watchedlist = useSelector((state) => state.wishlist);
    console.log(watchedlist);
    useEffect(() => {
        if (watchedlist.length == 0) {
            redictnowatchedlist();

        }
    }, [])
    return (
        <>
        <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',flexWrap:'wrap',margin:'1em' } }>
            {
                
                watchedlist.map((movie)=>(
              <div style={{width:'50%'}}>
                <div className="card m-4" >
                    <div className="row">
                        <div className="col-md-5">
                            <img src={`https://image.tmdb.org/t/p/w500//${movie.poster_path}`} 
                            class="img-fluid rounded-start" 
                             />
                        </div>
                        <div className="col-md-7">
                            <div className="card-body">
                            <div style={{ display: 'flex', flexDirection: 'row',  justifyContent: 'space-between' }}>
                            <h5 className="card-title">{movie.title}</h5>

                           <FaHeart />

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
          </div>

        </>
    )
}