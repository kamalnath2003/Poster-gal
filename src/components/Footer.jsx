import React from 'react'

function Footer() {
  return (
    <div>
          <div className="container-fluid footerbox">
      <div className="row">
        <div className="col">
          <div className="d-flex justify-content-center ms-5">
            <p className="subscribe">
              Subscribe and stay on top of our latest news and promotions
            </p>
          </div>
        </div>
      </div>
      <div className="row footerinput" style={{ marginLeft: '7%' }}>
        <div className="col-12">
          <div className="subs d-flex">
            <input type="text" />
            <p>Subscribe</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="d-flex justify-content-center gap-2">
            <img src="/img/icons1.png" alt="" />
            <img src="/img/icon2.png" alt="" />
            <img src="/img/icon3.png" alt="" />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col text-center mt-5">
          <p>© 2035 by Poster Gal. Powered and secured by Wix</p>
        </div>
      </div>
    </div>
      
    </div>
  )
}

export default Footer
