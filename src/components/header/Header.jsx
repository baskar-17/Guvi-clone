import React from 'react';
import {Carousel } from 'react-bootstrap'; 
import './header.css';

import image1 from '../../assets/1.jpg'
import image2 from '../../assets/2.jpg'
import image3 from '../../assets/3.jpg'

function Header() {
  return (  
  <div>  
    <Carousel interval={3000}>  

      <Carousel.Item>  
          <img style={{maxHeight:"100vh"}} className="d-block w-100" src={image1} alt="First slide" />    
      </Carousel.Item>  

      <Carousel.Item>  
        <img className="d-block w-100" src={image2} alt="Second slide" />  
      </Carousel.Item>  

       <Carousel.Item>  
        <img className="d-block w-100" src={image3} alt="Third slide" />  
      </Carousel.Item>  

    </Carousel>  
</div>  
    
  );
}

export default Header

