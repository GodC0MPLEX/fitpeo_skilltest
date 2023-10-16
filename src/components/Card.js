import React from 'react'
import './card.css'

function Card(props) {
  return (
    <div className='card'>
      <img src={props.src} id='card-img'/>
      <div className='details'>
        <p>{props.name}</p>
        <h4>💲{props.price}</h4>
        <h6>{props.growth} % this month</h6>
      </div>
    </div>
  )
}

export default Card
