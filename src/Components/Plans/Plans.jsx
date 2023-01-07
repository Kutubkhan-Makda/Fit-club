import React from 'react'
import './Plans.css'
import {plansData} from '../../data/plansData'
import whiteTick from '../../assets/whiteTick.png'

const Plans = () => {
  return (
    <div className="plans" id='plans'>
      <div className="blur blur-p-1"></div>
      <div className="blur blur-p-2"></div>
        <div className="programs-header" style={{gap:'2rem'}}>
            <span className='stroke-text'>READY TO START</span>
            <span>YOUR JOURNEY</span>
            <span className='stroke-text'>NOW WITHUS</span>
        </div>

        <div className="plans-card">
          {plansData.map((Plan,i)=>(
            <div className="plan" key={i}>
              {Plan.icon}
              <span>{Plan.name}</span>
              <span>$ {Plan.price}</span>
              <div className="features">
                {Plan.features.map((feature,i)=>(
                  <div className="feature">
                    <img src={whiteTick} alt="" />
                    <span key={i}>{feature}</span>
                  </div>
                ))}
              </div>
              <div><span>See more benifits -></span></div>
              <button className="btn">Join Now</button>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Plans