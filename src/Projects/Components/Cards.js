import React from 'react'
// import "../Styles/Cards.css"
// import Fade from "react-reveal/Fade"
import "../Styles/cards.css"

const Cards = ({ImgSrc, Projects, Name}) => {
  return (
    <div className='cards'>
            <div className='h-96 w-96 bg-slate-100 rounded-2xl'>
                <img src={ImgSrc} className='cards__image h-72 w-96 rounded-t-2xl' alt='' />
                <div className='text-center mt-4'>
                <p className='text-2xl text-gray-700'>{Projects}</p>
                <p className='text-lg text-gray-400'>{Name}</p>
                </div>
            </div>
    </div>
  )
}

export default Cards