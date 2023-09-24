import React from 'react'


function Home() {
  return (
    <div>
            <div className="container-fluid">
      <div className="row pe-0">
        <div className="col-md-6 col-12 px-0">
          <img className="w-100" src="/public/img/wow.png" alt="" />
        </div>
        <div className="col-md-6 col-12 hero">
          <div className="ms-5">
            <div className="collect">NEW COLLECTION</div>
            <div className="style-your-walls">STYLE<br />YOUR<br />WALLS</div>
            <div className="shopnow justify-content-center">
              <a style={{ textDecoration: 'none', color: 'black' }} href="#">
                Shop now
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid" style={{ width: '100%' }}>
        <div className="row contain" style={{ marginTop: '100px' }}>
          <div className="col-1 col-md-auto background">
            <div className="bg-light text-center" style={{ margin: '100px', padding: '30px' }}>
              <p>FREE</p>
              <p>SHIPPING WORLDWIDE</p>
              <p>Shop Now</p>
            </div>
          </div>
          <div className="col background2">
            <div className="text-center backdiv" style={{ margin: '100px', padding: '30px' }}>
              <p>Dont miss</p>
              <p>40% OFF YOUR SECOND POSTER</p>
              <a className="text-decoration-none" href="">
                <div className="cyanbutton"><p>ORDER NOW</p></div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <div style={{ marginLeft: '25%', marginTop: '10%' }}>
              <div style={{ width: '45%' }}>
                <p className="fresh">FRESH POSTERS</p>
                <p className="thissummer">This Summer</p>
                <p className="para">
                  I'm a paragraph. Click here to add your own text and edit me.
                  It's easy. Just click “Edit Text”.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="pos">
              <div className="transp position-absolute">
                <img className="w-100" src="/public/img/leaf.png" alt="" />
              </div>
              <div className="back">
                <img className="w-75" src="/public/img/transparent.png" alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-md-6 d-flex">
            <div className="box">
              <div>
                <img className="w-100" src="/public/img/galleries.png" alt="" />
              </div>
              <div className="textbox">
                <p className="tropic">TROPICAL COLLECTION</p>
                <p className="shopnow2">SHOP NOW</p>
              </div>
            </div>
          </div>
          <div className="big col-12 col-md-6 d-flex" style={{ marginTop: '25%' }}>
            <div className="box" style={{ backgroundColor: '#F5E5D6' }}>
              <div>
                <img className="w-100" src="/public/img/gallery2.png" alt="" />
                <div className="textbox">
                  <p className="tropic">TROPICAL COLLECTION</p>
                  <p className="shopnow2">SHOP NOW</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-6">
            <div className="box1">
              <div>
                <img className="w-100" src="/public/img/gallery3.png" alt="" />
                <div className="textbox">
                  <p className="tropic">TROPICAL COLLECTION</p>
                  <p className="shopnow2">SHOP NOW</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <div className="row">
            <div className="col postergal">
              <p>#POSTER_GAL</p>
            </div>
          </div>
          <div className="row">
            <div className="col px-0">
              <img className="w-100" src="/public/img/poster.png" alt="" />
            </div>
            <div className="col px-0">
              <img src="/public/img/poster2.png" alt="" className="w-100" />
            </div>
            <div className="col px-0"></div>
            <div className="col px-0"></div>
          </div>
        </div>
      </div>
    </div>


      
    </div>
  )
}

export default Home
