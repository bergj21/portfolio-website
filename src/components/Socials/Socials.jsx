import React from 'react'
import './Socials.css'

function Socials() {
  return (
    <section className="socials">
      <div
        className="socials_container side_float"
        data-aos="fade"
        data-aos-delay="2000"
      >
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/john-berg21/"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.instagram.com/jack.iceberg/"
        >
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a href="https://github.com/bergj21" target="_blank" rel="noreferrer">
          <i className="fa-brands fa-github"></i>
        </a>
      </div>
      <div
        className="side_email_container side_float"
        data-aos="fade"
        data-aos-delay="2000"
      >
        <a href="mailto:johnberg2021@gmail.com">johnberg2021@gmail.com</a>
      </div>
    </section>
  )
}

export default Socials
