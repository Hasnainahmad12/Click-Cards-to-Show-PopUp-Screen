import React from 'react'
// import { data } from '../Config/Data'
import { useLocation } from 'react-router-dom';
import "../Styles/Details.css"
import {FaStar} from "react-icons/fa"

const Details = () => {
  const {state} = useLocation()
  // const navigate = useNavigate()
console.log(state)

  return (
    <div className='h-[500px] w-[500px]'>
        <img src={state.img} alt='' className='desc__image' />
        <div className='product'>
        <p className='text-2xl text-gray-700'>{state.Projects}</p>
        <p className='text-lg text-gray-400'>{state.Name}</p>
        </div>
        <div className='paragh'>
        <p className='disc'>A strong project description provides a roadmap for stakeholders and communicates the vision without getting bogged down in details. We’ve compiled expert tips and sample project descriptions to help you get started. </p>
        <span className='flex gap-2 text-2xl text-orange-500 justify-center'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></span>
        </div>
    </div>
  )
}

export default Details