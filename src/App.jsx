import React from 'react'
import Movies from './components/Movies'

const App = () => {
  return (
    <>
      <div className=" bg-black h-full w-full text-black p-4">
        <p className=' flex mb-6  ml-12 mt-2 text-white text-2xl justify-center items-center'>Posts</p>
        <Movies/>
      </div>
    </>
  )
}

export default App
