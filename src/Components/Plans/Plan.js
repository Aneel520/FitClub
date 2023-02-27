import React from 'react'
import "./Plan.css"
import { plansData } from '../../data/plansData'
import whiteTick from '../../assets/whiteTick.png'
const Plan = () => {
  return (
    <div className='plans-container' id="plans">
        <div className='blur plans-blur-1'>

        </div>
        <div className='blur plans-blur-2'>

        </div>
        <div className='programs-header' style={{gap:'2rem'}}>
            <span className='stoke-text'>READY TO START</span>
            <span>YOUR JOURNEY</span>
            <span className='stoke-text'>NOW WITHUS</span>
        </div>

        <div className='plans'>
            {plansData.map((plan,index) => (
                <div className='plan' key={index}>
                    {plan.icon}
                    <span>{plan.name}</span>
                    <span>${plan.price}</span>

                    <div className='features'>
                        {plan.features.map((feature,i) =>(
                            <div className='feature'>
                                <img src={whiteTick} alt="" />
                                <span key={i}>{feature}</span>
                            </div>
                        ))}
                    </div>
                    <div>
                        <span>See more benifits </span>
                    </div>
                    <button className='btn'>Join now</button>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Plan