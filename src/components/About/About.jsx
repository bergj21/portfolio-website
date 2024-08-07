import React from 'react'
import './About.css'

function About() {
  return (
    <section className="about_section" id="about" data-aos="fade-up">
      <h1 className="about_title section_title">About Me</h1>
      <div className="about_content">
        <div className="about_data">
          <p>
            I'm a Senior at Tufts University majoring in
            <span> Computer Science</span>
          </p>
          <p>
            I am a passionate programmer interested in the fields of{' '}
            <span>
              full stack development, machine learning, and artifical
              intelligence.
            </span>{' '}
            I am always looking forward to learning new ideas, developing my
            skills, and making new connections. I am currently seeking a
            fulltime Software Engineering role.
          </p>
        </div>
        <div className="about_image">
          <div className="about_img_container">
            <img src="assets/jack-profile.JPG" alt="John Profile Pic" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
