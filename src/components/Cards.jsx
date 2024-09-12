import React from 'react'

const Cards = ({movies}) => {
  return (
    <div className='grid grid-cols-4 gap-4 bg-black'>
      {
        movies.map((movie)=>{
            return(
                <div className=" bg-yellow-600 px-2 py-1">
                <p className=' text-xl text-black mb-3 mt-2' key={movie.id}>{movie.title}</p>
                <p className=' text-sm text-black'>{movie.body}</p>
                </div>
            )
        })
      }
    </div>
  )
}

export default Cards
