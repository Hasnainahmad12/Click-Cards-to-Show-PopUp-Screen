import React, { useState } from "react";
import { data } from "../Config/Data";
import "../Styles/Models.css";
import Cards from "./Cards";
 import {useNavigate} from "react-router-dom"
import Details from "../Components/Details"

export default function Modal() {
  const [modal, setModal] = useState(false);
    const navigate= useNavigate()


  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>

      {/* <button onClick={toggleModal} className="btn-modal">
        Open
      </button> */}

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">

            <Details />
            
            <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      )}
      <div onClick={toggleModal}>
       {data.map((it) =>{
         return <div onClick={()=>navigate("/Details",{state:it})} >
            <Cards ImgSrc={it.img} Projects={it.Projects} Name={it.Name}/>
            </div>
          })}  
      </div>
      {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A ullam excepturi corrupti doloremque accusantium id ratione ipsa veniam eum magnam soluta molestias accusamus, maiores tenetur quae temporibus aperiam, sint expedita illum, libero error deserunt maxime omnis vero. Quis, iste. Dignissimos quidem repellat architecto expedita atque, nam fuga nihil maxime ducimus dolorem magnam in quae cum animi exercitationem et velit? Est vitae repellat, ratione, necessitatibus facilis veritatis, saepe tempore accusamus magni deleniti itaque aliquid rem! Ea laborum soluta et minima animi maiores unde aliquid modi quod quasi minus quae tur est soluta illum tempora, doloremque itaque non nesciunt saepe minus necessitatibus ex! Voluptatum, modi distinctio ullam unde neque quisquam excepturi impedit quae harum eum sit corporis assumenda dignissimos fuga sunt alias illum doloribus voluptatem, aliquid quia! Id sunt facilis odio soluta, accusamus vel voluptatum aut deserunt rerum laborum placeat adipisci doloribus! Deserunt, quisquam molestiae.</p> */}
    </>
  );
}