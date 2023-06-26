import React from 'react'

function Preloader() {
  return (
    <div className=' h-screen w-screen z-[99999] fixed top-0 left-0 bottom-0 bg-white text-center  grid place-content-center place-items-center'>
        <div className=' w-[70px] h-[70px] border-4 border-sky-950 rounded-full animate-spin delay-100 border-r-white'></div>
    </div>
  )
}

export default Preloader