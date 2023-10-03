import { useState } from "react"

export default function Paginmovies(){
    const [moviesapi,setMoviesapi]=useState([])
    useEffect(()=>{
        axiosinstance
        .get("")
        .then((res)=> setProductlist(res.data.products))
        .catch((err)=> console.log(err));
    },[]);
     console.log(productlist);
    return (
        <>
          
        </>
    )
}