import React from 'react'
import './courses.css'

import {Carousel } from 'react-bootstrap'; 


function Courses() {
  return (
    <div>
        <div className="courses-container">

        <div className="courses-heading">
            <h3>Learn Tech from Latest Courses</h3>
            <p>Explore 175+ Premium Courses with New Course Additions every Month.</p>
        </div>

        <div className="courses-tabs">
            <div className="tabs activated-tabs">Programming Languages</div>
            <div className="tabs">Data Science</div>
            <div className="tabs">Web Development</div>
            <div className="tabs">Cybersecurity</div>
            <div className="tabs">Database and Cloud Computing</div>
            <div className="tabs">Software Testing and Automation</div>
        </div>

        <div className="courses-content">
            <Carousel interval={3000}>  

            <Carousel.Item className="course-content-container">  
                <div className="course">
                    <div className="course-image">
                        <img src="" alt="" />
                        <p>Premium</p>
                    </div>
                        <h3>HTML & CSS</h3>
                        <p>Tamil 213545 Enrolled</p>
                </div>
            </Carousel.Item>  

            <Carousel.Item>  
            <div className="course">
                    <div className="course-image">
                        <img src="" alt="" />
                        <p>Premium</p>
                    </div>
                        <h3>HTML & CSS</h3>
                        <p>Tamil 213545 Enrolled</p>
                </div>
            </Carousel.Item>  

            <Carousel.Item>  
            <div className="course">
                    <div className="course-image">
                        <img src="" alt="" />
                        <p>Premium</p>
                    </div>
                        <h3>HTML & CSS</h3>
                        <p>Tamil 213545 Enrolled</p>
                </div>
            </Carousel.Item>  

            </Carousel>  
        </div>
     </div>
 </div>
  )
}

export default Courses