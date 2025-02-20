import React from 'react'
import './DefaultTemplate.css'
import Nav from '../../components/Nav/Nav'

export default function DefaultTemplate({children}) {
  return (
    <div className='DefaultTemplate'>
      
      {children}
      <Nav/>
    </div>
  )
}
