import React, { useEffect, useState } from 'react'
import DefaultTemplate from '../../templates/DefaultTemplate/DefaultTemplate'
import "./DigiWikiPage.css"
import { getAllDigimon } from '../../api/digiRequest'
import DigimonIcon from '../../components/DigimonIcon/DigimonIcon'
import levelList from "../../data/levels.json"
import { Link } from 'react-router-dom'
export default function DigiWikiPage() {
    const [allDigimonData, setAllDigimonData] = useState(null)
    const [targetDigimon, setTargetDigimon] = useState(null)
    const [levelFilter, setLevelFilter] = useState("All")
    useEffect(() => {
        const controller = new AbortController()
        async function fetchingApi() {
            try{
                const res = await getAllDigimon(levelFilter)
                setAllDigimonData(res.content)
                
                controller.signal
            }catch(e){
                console.log(e);
            }
        }
        fetchingApi()
      return () => {
        controller.abort()
      }
    }, [levelFilter])
    
  return (
    <DefaultTemplate>
        <div className="DigiWikiPage top">
            {
                targetDigimon ?
                <>
                    <img src={targetDigimon.image} alt="" />
                    <div>
                        <b>{targetDigimon.name}</b>
                        <Link to={"/digimonInfo/"+targetDigimon.id}>Go to Detail</Link>
                    </div>
                </>
                :
                "xxx"
            }
        </div>
        <br />
        <div className='DigiWikiFilter'>
            {
                levelList.map((level, key)=>(
                    <span onClick={()=>{setLevelFilter(level.name)}} className={levelFilter==level.name?"levelFilter active": "levelFilter"}>{level.name}</span>
                    ))
            }
        </div>
        <div className="DigiWikiPage bottom">
            {
                allDigimonData ?
                    <>
                        {
                            allDigimonData.map((data, key)=>{
                                    return(<DigimonIcon data={data} setTargetDigimon={setTargetDigimon}/>)
                            })
                        }
                    </>
                :
                "loading..."
            }
        </div>
    </DefaultTemplate>
  )
}
