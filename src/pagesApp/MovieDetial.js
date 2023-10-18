import axios from "axios";
import React, { useEffect, useState } from "react"
import { Link, json, useNavigate, useParams } from "react-router-dom";
import usePagination from "../components/usePagination";
import { FaHeart, FaRegHeart } from 'react-icons/fa';

export default function MovieDetial() {
    const [moviedetial, setMoviedetial] = useState("");
    const [movierecomnds, setMovierecomnds] = useState("");
    const themeIsLight = (icon === 'FaHeart');
    const [icon, setIcon] = useState('FaRegHeart')
    const imgchangehandler = (event) => {
        const icon = themeIsLight ? <FaRegHeart size={20} onClick={() => setIcon('FaRegHeart')} />
            : <FaHeart size={20} onClick={() => setIcon('FaHeart')} />


    }
    const [productionimg,setProductionimg]=useState({})
            const params = useParams();
    console.log("proms=" + params.id);
    // get recommded movies
    async function getMovies() {

        const { data } = await axios.get(
            `https://api.themoviedb.org/3/movie/${params.id}/recommendations?api_key=dfee8f79eb74cfe829f62960da0d964e`
        );
        setMovierecomnds(data.results);

    }
    console.log("recommends" + movierecomnds)





    // fetch movie detials

    useEffect(() => {
        const delay = 1000;

        getMovies();

    },)

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${params.id}?api_key=dfee8f79eb74cfe829f62960da0d964e`).then((res) => setMoviedetial(res.data));
        setProductionimg( JSON.stringify(moviedetial.production_companies) )
    },)
    console.log(moviedetial);
        console.log(productionimg);
   



    //navigation to mive detials
    const { currentPage, nextPage, previousPage } = usePagination(1);
    const navigat = useNavigate();
    const redictmoviedetial = (id) => {
        navigat(`/MovieDetial/${id}`);
        console.log("navigate to movi detial")
    }

    return (
        <>
            <div className="row  " style={{ width: '50rem', }}>
                <div className="card  m-2" >
                    <div className="row g-0">

                        <div className="col-md-4">
                            <img src={`https://image.tmdb.org/t/p/w500//${moviedetial.poster_path}`} className="img-fluid rounded-start p-1 rounded" />



                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <h5 className="card-title"> {moviedetial.original_title} </h5>
                                    <FaHeart

                                        onClick={(event) => {
                                            
                                            event.preventDefault();
                                            imgchangehandler(event);

                                        }} />
                                </div>
                                <small class="text-muted"> {moviedetial.release_date}</small>
                               
                                <p className="card-text ">{moviedetial.overview} </p>

                            </div>
                            <div style={{ display: 'flex', flexDirection: 'row', margin: '5px' }} >
                                <button className="btn rounded-pill me-4 "> Action </button>
                                <button className="btn rounded-pill me-4 "> Crime </button>
                                <button className="btn rounded-pill"> Thriller </button>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'row', margin: '5px', padding: '5px' }}>
                            <div style={{ display: 'flex', flexDirection: 'row', margin: '5px', padding: '5px' }} >
                                <p className="card-text fw-bold me-4"> Duration: </p>
                                <small class="text-muted">  {moviedetial.runtime} </small>
                              

                            </div>
                            <div style={{ display: 'flex', flexDirection: 'row', margin: '5px', padding: '5px' }} >
            
                                <p className="card-text fw-bold bold"> Languages:   </p>
                                <small class="text-muted"> {moviedetial.original_language} </small>
                            </div>
                            </div>
                            <div className="col-md-2">
                               
                              
                            <img src={`https://image.tmdb.org/t/p/w500//${ productionimg } `} 
                            className="img-fluid rounded-start p-1 rounded" />



                        </div>

                        </div>

                        
                    </div>
                </div>
            </div>
            <hr />

            <h2> Recommendations</h2>

            <div>
                <div className="row   m-3">
                    {movierecomnds.length > 0 ? (
                        movierecomnds.map((movie, index) => (
                            <div key={index} className="col-lg-2 col-md-3 mb-5 position-relative">
                                <Link

                                >
                                    <div
                                        className="card h-100 "
                                        style={{ backgroundColor: "" }}
                                    >
                                        <img
                                            src={`https://image.tmdb.org/t/p/w500//${movie.poster_path}`}

                                            onClick={(event) => {
                                                event.preventDefault();
                                                redictmoviedetial(movie.id)

                                            }}

                                        />

                                        <div className="card-body d-flex text-start align-items-stretch flex-column">
                                            <h5 className="card-title  text-start">{movie.title}</h5>
                                            {/* <div className="wishlist" onClick={(event)=>event.preventDefault()}>
                  <i class="fa-regular fa-heart"></i>
                    
                  </div> */}


                                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                                <p className="card-text">{movie.release_date} </p>


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

            </div>
        </>

    )
}    