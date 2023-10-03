
import React, { useEffect, useState } from "react";
import axios from "axios";

import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Search from '../components/Search/Search';
import usePagination from "../components/usePagination";
import { addToWishlist, removeFromWishlist } from "../store/slices/moiveSlicet"


export default function Home() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  
  const dispatch = useDispatch(); // Initialize dispatch

  const { currentPage, nextPage, previousPage } = usePagination(1);
  const wishlist = useSelector((state) => state.wishlist); // Get wishlist from Redux state

  async function getMovies(page) {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=dfee8f79eb74cfe829f62960da0d964e&page=${page}`
    );
    setMovies(data.results);
  }
  console.log(movies);

  useEffect(() => {
    const delay = 1000;
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      getMovies(currentPage);
    }, delay);
  }, [currentPage]);

 // const log_f = useSelector((state) => state.logFlage.log_flag);
 const hearton = require("../assets/iconheart.png");
 const heartoff = require("../assets/heartnativ.png");

 const [img, setimg] = useState(false);

 const imgchangehandler = () => {
     if(!img) {
         setimg(true);
     }else{
         setimg(false)
     }
 };
//navigation to mive detials
const navigat=useNavigate();
const redictmoviedetial = (id) => {
  navigat(`/MovieDetial/${id}`);
  console.log("navigate to movi detial")
}


  // Function to handle adding/removing movies from wishlist
  const handleWishlistToggle = (movie) => {
    if (wishlist.includes((m) => m == movie)) {
      // If movie is in wishlist, remove it
      dispatch(removeFromWishlist(movie));
    } else {
      // If movie is not in wishlist, add it
      dispatch(addToWishlist(movie));
    }
  };

  return (
  <>
    <Search />
    <div className="row text-center position-relative">
      {movies.length > 0 ? (
        movies.map((movie, index) => (
          <div key={index} className="col-lg-3 col-md-3 mb-5 position-relative p-4">
            <Link>
              <div 
                className="card h-50 "   
                style={{ backgroundColor: "lightgrey" }}
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500//${movie.poster_path}`}

                  onClick={(event) => {
                    event.preventDefault();
                    redictmoviedetial(movie.id)
                    
                  }} 
                  
                />

                <div className="card-body d-flex   flex-column">
                  <h5 >{movie.title}</h5>
                 
                   <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <p className="card-text">{movie.release_date} </p>
                    <img src={heartoff} alt='bulb-off'  onClick={(event) => {
                      handleWishlistToggle(movie);
                      event.preventDefault();
                      imgchangehandler();
                    }} style={{width:'1em' ,height:'1em'}}  />
                 
                  </div>
                   
                  <div className="w-25 text-white bg-info top-0 end-0 position-absolute">
                    {movie.vote_average}
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))
      ) : (
        <i className="fas fa-spinner fa-spin fa-2x justify-content-center"></i>
      )}
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
            <button
              className="page-link"
              onClick={previousPage}
              disabled={currentPage === 1}
            >
              Previous
            </button>
          </li>
          <li className="page-item">
            <button className="page-link" onClick={nextPage}>
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
    </>
  );
}