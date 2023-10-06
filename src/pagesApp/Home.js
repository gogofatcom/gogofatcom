
import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";

import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Search from '../components/Search/Search';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { addToWishlist, removeFromWishlist } from "../store/slices/moiveSlicet"
import  usePagination   from "../components/usePagination";




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
 // change color of favorit
 const [active, setActive] = useState(false);
 
 const imgchangehandler = (event) => {
     
      if(!active ){
        event.target.style.color = 'yellow'
        setActive(true);
      }else {
        event.target.style.color = 'red'}
      }
    

//navigation to mive detials
const navigat=useNavigate();
const redictmoviedetial = (id) => {
  navigat(`/MovieDetial/${id}`);
  console.log("navigate to movi detial")
}
const [icon, setIcon] = useState('FaRegHeart')

    //place your changeTheme function here with the added code

    // const themeIsLight = (icon === 'FaRegHeart');
    // const Icon = themeIsLight ? <FaRegHeart size={20} onClick={() => changeTheme('FaRegHeart') }/>
    //                           : <FaHeart size={20} onClick={() => changeTheme('FaHeart') }/>

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
    <div className="row text-center position-relative m-3">
      {movies.length > 0 ? (
        movies.map((movie, index) => (
         
          <div key={index} className="col-lg-2 col-md-3 mb-5 position-relative ">
            <Link style={{textDecoration: 'none'}}  >
              <div  
                className="card "   
                style={{ backgroundColor: ""}}
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500//${movie.poster_path}`}

                  onClick={(event) => {
                    event.preventDefault();
                    redictmoviedetial(movie.id)
                    
                  }} 
                  
                />

                <div className="card-body d-flex text-start  flex-column">
                  <div  className="w-100">
                  <h6  className="w-100 text-nowrap">{movie.title}</h6>
                  </div>
                   <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <p className="card-text">{movie.release_date} </p>
                    
                    <div>

                    </div>
                    <FaHeart 
                   
                    onClick={(event) => {
                      handleWishlistToggle(movie);
                      event.preventDefault();
                      imgchangehandler(event);
              
                    }}  />
                 
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
      {
       
      
      
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
      }
    </div>
    </>
  );
    }