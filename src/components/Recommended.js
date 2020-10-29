import React from 'react'
import './Recommended.scss'
import Image1 from '../assets/AdobeStock_236655481.png'
import Image2 from '../assets/AdobeStock_118120200.png'
import Image3 from '../assets/AdobeStock_136908398.png'
import Image4 from '../assets/AdobeStock_173519034.png'

function Recommended() {

        const data = [
            {
            image:`${Image1}`,
            name: 'T-Shirt Summer Vibes',
            price:'$89.99'
            },
            {
                image:`${Image2}`,
                name: 'Loose Knit 3/5 Sleeve',
                price:'$119.99'
            },
            {
                image:`${Image3}`,
                name:'Basic Slim Fit T-Shirt',
                price:'$79.99',
            },
            {
                image:`${Image4}`,
                name:'Loose Textured T-Shirt',
                price:'$199.99'
            }
        ]
    return (
        <div className='recommended'>
          <div className='recommended__Title'>
              <h3>Selected just for  you</h3>
              <span>Show more</span>
          </div>
          
          <div className='recommended__Listing'>
              
             {data.map(data => (
                 <div>
                  <img className='recommended__Image' src={data.image} alt='product'/>
                  
                  
                  <div className='recommended__Item'>
                      <span>{data.name}</span>
                      <span>{data.price}</span>
                  </div>
                  </div>
             ))}
          </div>
            
        </div>
    )
}

export default Recommended
