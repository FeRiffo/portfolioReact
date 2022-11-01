import React from 'react';
import "./About.css";
import portada from "../../media/portada.jpeg";

const About = () => {
  return (
    <div className='about-container'>
        <div className='about-desc'>
            <h3>Let me tell you something about me</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                 Modi quis quaerat tenetur ipsam consequuntur!
                 Saepe cupiditate praesentium blanditiis, officia error mollitia vel labore, tempora reprehenderit cum, 
                 neque culpa enim qui.
           </p>
        </div>

        <div className='about-img'>
            <img  src= {portada} alt='about'></img>

        </div>
      
    </div>
  )
}

export default About
