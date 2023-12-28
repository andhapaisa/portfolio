import React from 'react';
import Profile from '../../assets/dp .png'
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import "./home.css";
const Home = () => {
  return (
    <section className='home section grid'>
        <img src={Profile} alt =' ' className='home__img' />
        
        <div className='home__content'>
            <div className='home__data'>
                <h1 className='home__title'>
                   <span>I'm Aman Kaaudhan .</span>
    Web Designer    </h1>
    <p className='home__descrip'>
    I'm curently doing B.Tech. in Mechanical Engineering from IIT(ISM) Dhanbad by
                     cracking JEE ADVANCED 2022 . My hobby is playing cricket. I like to make technical tutorials in my free time.
           
    </p>
    <Link to={'/about'} className='button'>
    More About Me <span className='button__icon'>
        <FaArrowRight />
    </span>
    </Link>
            </div>
        </div>
        
        <div className='color__block' >
        </div>
        </section>
  )
}

export default Home
