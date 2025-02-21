import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import AbortController from 'abort-controller'
import { getDigimonInfo } from '../../api/digiRequest'
import "./DigimonInfoPage.css"
import DefaultTemplate from '../../templates/DefaultTemplate/DefaultTemplate'

export default function DigimonInfoPage() {
    const [data, setData] = useState(null)
    const { id } = useParams()
    const nav = useNavigate()
    useEffect(() => {
        const controller = new AbortController()
        async function fetchingApi() {
            try {
                const res = await getDigimonInfo(id)
                setData(res)
                console.log(res);

                controller.signal
            } catch (e) {
                console.log(e);

            }
        }
        fetchingApi()

        return () => {
            controller.abort()
        }
    }, [id])

    return (
        <DefaultTemplate>
            <div className='DigimonInfoPage'>
                {
                    data ?
                        <>
                            <img className='DigimonInfoPageImage' src={data.images[0].href} alt="" />
                            <h2 className='DigimonInfoPageTitle'>{data.name}</h2>
                            <div className='DigimonInfoPageContainer'>
                                <div className='DigimonInfoPageRow'><span>Level :</span> <span>{data.levels[0].level}</span></div>
                                <div className='DigimonInfoPageAttributes'>
                                    <span>attributes : </span>
                                    <div className='listAttribute'>
                                        {data.attributes.map((attribute, key)=>(
                                            <span className='attribute' key={key}>{attribute.attribute}</span>
                                        ))}
                                    </div>
                                </div>
                                <div className='DigimonInfoPageRow'>
                                    <span>Fields : </span>
                                    <div className='listAttribute'>
                                        {data.fields.map((field, key)=>(
                                            <img key={key} src={field.image} alt="" />
                                        ))}
                                    </div>
                                </div>
                                <div className='DigimonInfoPageDescription'>
                                    {data.descriptions[1].description}
                                </div>
                                <div>
                                    {
                                        data.priorEvolutions.length > 0 ?
                                        <>
                                            <h3>Regresion for {data.name}</h3>
                                            {
                                                data.priorEvolutions.map((d, key)=>(
                                                    <div onClick={()=>{nav("/digimonInfo/"+d.id)}} className='DigimonInfoPageLinkD' key={key}>
                                                        <img src={d.image} alt="" />
                                                        <span>{d.digimon}</span>
                                                    </div>
                                                ))
                                            }
                                        </>
                                        :
                                            <h3>No Regresion for {data.name}</h3>
                                    }
                                </div>
                            </div>
                        </>
                        :
                        "loading"
                }
            </div>
        </DefaultTemplate>
    )
}
