import React from 'react'
import "./DigimonIcon.css"
export default function DigimonIcon({data, setTargetDigimon}) {
  return (
    <div className='DigimonIcon' onClick={()=>{setTargetDigimon(data)}}>
        <img src={data.image} alt="" />
    </div>
  )
}
