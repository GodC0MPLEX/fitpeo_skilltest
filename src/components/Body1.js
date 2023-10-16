import React from 'react'
import Card from './Card'
import './body1.css'

function Body1() {
  return (
    <div id='body1'>
         <Card src='https://cdn-icons-png.flaticon.com/128/3135/3135673.png'
     name='Earning'
     price='198k'
     growth='⬆️ 37.6'/>
        <Card src='https://cdn-icons-png.flaticon.com/128/3624/3624080.png'
     name='Orders'
     price='2.4k'
     growth='⬇️ 2'/>
        <Card src='https://cdn-icons-png.flaticon.com/128/2355/2355715.png'
     name='Balance'
     price='2.4k'
     growth='⬇️ 2'/>
        <Card src='https://cdn-icons-png.flaticon.com/128/5329/5329515.png'
     name='Total Sales'
     price='89k'
     growth='⬆️ 11'/>
    </div>
  )
}

export default Body1
