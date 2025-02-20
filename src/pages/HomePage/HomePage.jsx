import React from 'react'
import DefaultTemplate from '../../templates/DefaultTemplate/DefaultTemplate'
import titleImg from "../../../public/assets/img/Digimon_Logo.png"
import "./HomePage.css"
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
export default function HomePage({theme}) {
    const nav = useNavigate()
  return (
    <DefaultTemplate>
        <section className={'homePage '+theme}>
            <img src={titleImg} alt="" />
            <h1>Digi Lab</h1>
            <div className='row'>
                <div className='home-link' onClick={()=>{nav("/digiwiki")}} >
                    <span>digiWiki</span>
                </div>
                <div className='home-link'></div>
            </div>
            <br />
            <div className='row'>
                <div className='home-link'></div>
                <div className='home-link'></div>
            </div>
            
        </section>
    </DefaultTemplate>
  )
}
