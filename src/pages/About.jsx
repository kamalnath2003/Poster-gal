import React from 'react'
import './about.css'
function About() {
  return (
    <div>
          <div className="container-fluid">
      <div className="row">
        <div className="col-12 col-md-6 p-0">
          <img style={{ width: '100%' }} src="/img/new.png" alt="" />
        </div>
        <div className="col p-0 columnbg" style={{ width: '100%' }}>
          <div className="parawrap">
            <p className="hello">Hello!</p>
            <p className="myname">MY NAME IS NORA</p>
            <p className="para">
              I'm a paragraph. Click here to add your own text and edit me.
              It’s easy. Just click “Edit Text” or double click me to add your
              own content and make changes to the font. Feel free to drag and
              drop me anywhere you like on your page. I’m a great place for you
              to tell a story and let your users know a little more about you.
            </p>
            <p className="para">
              This is a great space to write long text about your company and
              your services. You can use this space to go into a little more
              detail about your company. Talk about your team and what services
              you provide.
            </p>
            <p className="para">View My Work</p>
          </div>
        </div>
      </div>
    </div>
      
    </div>
  )
}

export default About
