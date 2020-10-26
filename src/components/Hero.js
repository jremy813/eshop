import React from 'react'
import './Hero.scss'
import Background from '../assets/joao-silas-SfkLX6fUObk-unsplash.png'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

function Hero() {
    return (
        <div className='hero' style={{backgroundImage: `url(${Background})`}}>
         <h1>Sale of the summer collection</h1>
         <div className='hero__NextIcon'>
             <ArrowForwardIcon  className='hero__Icon' style={{color:'white'}}/>
             <span>Shop Now</span>
         </div>
        </div>  
    )
}

export default Hero
