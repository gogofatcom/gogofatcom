import axios from "axios";
import React, { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";
import usePagination from "../components/usePagination";
export default function Searchresult() {

    const params = useParams();
    console.log("proms=" + params.name);

    //get movies
    const { currentPage, nextPage, previousPage } = usePagination(1);
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    async function getMovies(page) {
        const { data } = await axios.get(
            `https://api.themoviedb.org/3/search/movie?api_key=dfee8f79eb74cfe829f62960da0d964e&query=${params.name}`
        );
        setMovies(data.results);
    }
    useEffect(() => {
        const delay = 1000;
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            getMovies(currentPage);
        }, delay);
    }, [currentPage]);

    return (
        <>
            <div className="row  m-4 ">
                <div className="col-10">
                    <input type="text" id="inputPassword6" className="form-control" placeholder={params.name}
                        aria-describedby="passwordHelpInline" />
                </div>
                <div class="col-2 ">
                    <div >
                        <button for="inputPassword6" className="btn "> Search </button>
                    </div>

                </div>
            </div>

            <h3>Search Results for : {params.name} </h3>

            <div>

                <div className="row text-center position-relative">
                    {movies.length > 0 ? (
                        movies.map((movie, index) => (
                            <div key={index} className="col-lg-3 col-md-3 mb-5 position-relative">
                                <Link

                                >
                                    <div
                                        className="card h-100"
                                        style={{ backgroundColor: "lightgrey" }}
                                    >
                                        <img

                                            src={`https://image.tmdb.org/t/p/w500//${movie.poster_path}`}
                                            alt="Card image cap"

                                        />

                                        <div className="card-body d-flex  align-items-stretch flex-column">
                                            <h5 className="card-title ">{movie.title}</h5>
                                            {/* <div className="wishlist" onClick={(event)=>event.preventDefault()}>
                                                 <i class="fa-regular fa-heart"></i>
                    
                                             </div> */}


                                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                                <p className="card-text">{movie.release_date} </p>
                                                <img src='../assets/heartnativ.png'
                                                    style={{ width: '1em', height: '1em' }} />

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