import React from 'react'
import './body2.css'

function ProgressBar(props)
{
    let color = 'red';
    if(props.month==='Aug')
    {
        color='blue'
    }
    const bar = {
        height:`${props.height}px`,
        width:'20px',
        backgroundColor:`${color}`,
        borderRadius:'5px'
    }
    return<div>
        <div className='ProgressBar' style={bar}>

        </div>
        <br />
        <h6>{props.month}</h6>

    </div>

}

function Body2() {
  return (
    <div className='body2'>
        <div className='main_overview'>
      <div className='overview'>
        <div className='terms'>
        <h4>Overview</h4>
        <h6>Monthly Earning</h6>
        </div>
        <div className='basis'> 
        <h6>Quarterly ⬇️</h6>
        </div>
      </div>
      <div className='progress'>
        <ProgressBar height='70' month='Jan'/>
        <ProgressBar height='50' month='Feb'/>
        <ProgressBar height='90' month='Mar'/>
        <ProgressBar height='70' month='Apr'/>
        <ProgressBar height='75' month='May'/>
        <ProgressBar height='30' month='Jun'/>
        <ProgressBar height='75' month='Jul'/>
        <ProgressBar height='100' month='Aug'/>
        <ProgressBar height='90' month='Sep'/>
        <ProgressBar height='70' month='Oct'/>
        <ProgressBar height='60' month='Nov'/>
        <ProgressBar height='70' month='Dec'/>
      </div>
      </div>

      <div className='customers'>
        <h4>CUSTOMERS</h4>
        <h6>That buy products</h6>
        <div className='strip'>

        
        <div className='circle_red'>
            <h5>65% New Customers</h5>
        </div>
        </div>

      </div>

    </div>
  )
}

export default Body2
