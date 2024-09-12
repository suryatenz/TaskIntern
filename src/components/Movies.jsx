import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Cards from './Cards';

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [moviesPerPage, setMoviesPerPage] = useState(10);
    useEffect(() => {
        const getMovies = async () => {
            const responce = await axios.get('https://dummyjson.com/posts')
            console.log(responce.data.posts);
            setMovies(responce.data.posts);
        }
        getMovies();
    }, [currentPage]);
    const indexOfLastMovie = currentPage * moviesPerPage;
    const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
    const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);
    let pages=[];
    for (let i = 1; i <= Math.ceil(movies.length/moviesPerPage); i++) {
        pages.push(i);
    }
   
    return (
        <>
            <div className="">
                <Cards movies={currentMovies}/>
                <div className=" flex flex-row justify-center items-center gap-3 mt-4 ml-16">
                {
                    pages.map((page)=>{
                        return(
                            <div className=" ">
                            <button onClick={()=>setCurrentPage(page)} className='bg-yellow-600 px-3 py-2' >{page}</button>
                            </div>
                        )
                    })
                }
                </div>
            </div>
        </>
    )
}

export default Movies
