import React from 'react'
import "../styles/home.css"
import img1 from '../images/spider.png'
import img2 from '../images/mobile.png'
import img3 from '../images/social.png'
import HomeSection1 from '../Components/HomeSection1'
import HomeSection2 from '../Components/HomeSection2'

const Home = () => {
  return (
    <div className='main' >
      {/* {document.body.style.backgroundColor = "red"} */}
      <div className="hero">
        <div className="left">
          <div className="text1">
            <h2>YOUR CONTENT <br></br> DESERVE TO BE SEEN</h2>
          </div>
          <div className="text2">
            <h1>GET REAL, ORGANIC FOLLOWERS USING OUR POWERFUL GROWTH TOOL</h1>
          </div>
          <div className="text3">
            <div className="text3-row" style={{borderRight:'4px solid aqua'}}>
              <div className='text3-col' style={{borderBottom:'4px solid grey'}}>
                <h5>MOST AFFORDABLE ANYWHERE</h5>
              </div>
              <div className='text3-col'>
                <h5>TOS COMPLIANT </h5>
              </div>
            </div>
            <div className="text3-row">
              <div className='text3-col mrg-bottom' style={{borderBottom:'4px solid grey'}}>
                <h5> NO FAKE <br /> FOLLOWERS/BOTS </h5>
              </div>
              <div className='text3-col'>
                <h5>AI POWERED OPTIMIZATION</h5>
              </div>
            </div>
          </div>
          <div className="text4">
            <button>14 DAYS MONEY BACK GUNRANTEE</button>
          </div>
        </div>
        <div className="right ">
          <div className="hero-image">
            <div className='hero-img1'>
              <img src={img1} alt="" />
            </div>
            <div className='hero-img1'>
              <img src={img1} alt="" />
            </div>
            <div className='hero-img3'>
              <img src={img2} alt="" />
            </div>
            <div className='hero-img4'>
              <img src={img3} alt="" />
            </div>
          </div>
        </div>
        <div className='after-hero'>
          <div className="how-it-works">
            <h1>HOW IT WORKS</h1>
            <p>WE GROW YOUR FOLLOWERS ORGANICALLY THROUGH OUR PROPRIETARY AI-POWERED TECHNOLOGY. THIS WAY YOU CAN SIT BACK AND RELAX WHILE WE TARGET YOUR PERFECT CLIENTELE WITHOUT SPAM, BOTS, OR FAKE FOLLOWERS</p>
          </div>
          <div className="home-section1">
            <HomeSection1 />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home