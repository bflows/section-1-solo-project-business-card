import React from "react";

export default function Header() {
  return (
    <>
    <header>
      <div id="card-image"></div>
      <div id="about-me" className="d-flex">
        <h1 id="card-name">Billy Flowers</h1>
        <h2 id="job-role">Web Developer</h2>
      </div>
      <div id="contact-btns" className="d-flex">
        <a href="" target="_blank">
          <button className="btn-gap" id="email-btn"><i class="fa-solid fa-envelope"></i>Email</button>
        </a>
        <a href="https://www.linkedin.com/in/billy-flowers-4b0803260/" target="_blank">
          <button className="btn-gap" id="linkedin-btn"><i class="fa-brands fa-linkedin"></i>LinkedIn</button>
        </a>
      </div>
    </header>
    </>
  )
}