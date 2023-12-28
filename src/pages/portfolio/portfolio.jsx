import React from 'react'
// import { FaGithub, FaInfoCircle, FaLink } from 'react-icons/fa'
import './portfolio.css';
// import recipefinder from '../../assets/curry-g5ff3af663_1280.jpg'
import { portfolio } from '../../data';
import Portfolioitems from '../../component/portfolioitems';
const Portfolio = () => {
  return (
    <div>
       <h1 className='heading'>My </h1>
       <div className='projects'>

       {
        portfolio.map((item)=>{
          return <Portfolioitems key={item.id} {...item}/>
        })
       }
      
       </div> 
       </div>
  )
}

export default Portfolio
