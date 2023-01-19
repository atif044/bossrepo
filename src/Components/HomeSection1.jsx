import React from 'react'
import "../styles/homeSection1.css"
import imgh1 from '../images/h1.png'
import imgh2 from '../images/h2.png'
import imgh3 from '../images/h3.png'
import imgh4 from '../images/f1.png'
import imgh5 from '../images/f2.png'
import imgh6 from '../images/t1.png'
import imgh7 from '../images/t2.png'
import imgh8 from '../images/t3.png'
//
import img9 from '../images/30.png'
import img10 from '../images/p1.png'
import img11 from '../images/100.png'
import img12 from '../images/p2.png'
import img13 from '../images/e1.png'
import img14 from '../images/e2.png'
import img15 from '../images/faq1.jpeg'


import { useNavigate } from "react-router-dom";
import Contact from './Contact'

const HomeSection1 = () => {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/Order`;
    navigate(path);
  }
  return (
    <div className=''>
      <div className='homesection1-main  '  >
        < ul class="list-unstyled m-0 d-flex" >
          <li class="circle p-1">
            <div class="d-flex justify-content-center align-items-center">
              <h1 class="text-center num">1</h1>
            </div>
          </li>
          <li class="mx-5 d-flex align-items-end">
            <h1 class="pb-3">TELL US YOUR AUDIENCE</h1>
          </li>
        </ul >
        <div className="row1">
          <div className="col1 imgh1">
            <img src={imgh1} alt="" />
          </div>
          <div className="col2">
            <p>PROVIDE US WITH INFORMATION ABOUT YOUR TARGET AUDIENCE. OUR AI POWERED TECHNOLOGY WILL SELECTIVELY TARGET YOUR NICHE AND DRAW THEM BACK TO YOUR AMAZING CONTENT!</p>
          </div>
        </div>
      </div>

      {/* 2 */}
      <div className='homesection2-main  ' >
        < ul class="list-unstyled m-0 d-flex" >
          <li class="circle p-1">
            <div class="d-flex justify-content-center align-items-center">
              <h1 class="text-center num">2</h1>
            </div>
          </li>
          <li class="mx-5 d-flex align-items-end">
            <h1 class="">WE GET THEIR ATTENTION</h1>
          </li>
        </ul >
        <div className="row1">
          <div className="col1">
            <img src={imgh2} alt="" />
          </div>
          <div className="col2">
            <p>DEPENDING ON THE PACKAGE YOU CHOOSE, WE WILL SETUP 40-200 TIKTOK ACCOUNTS TO REACH OUT TO HUNDREDS OF PEOPLE PER DAY! THIS WILL DRIVE ATTENTION BACK TO YOUR PROFILE AND GROW YOUR FOLLOWING!</p>
          </div>
        </div>
      </div>

      {/* 3 */}
      <div className='homesection3-main ' >
        < ul class="list-unstyled m-0 d-flex" >
          <li class="circle p-1 homesection3-no">
            <div class="d-flex  ">
              <h1 class=" num">3</h1>
            </div>
          </li>
          <li class="mx-5 d-flex align-items-end ">
            <h1 class="">WATCH YOUR FOLLOWERS GROW!</h1>
          </li>
        </ul >
        <div className="row1">
          <div className="col1">
            <img src={imgh3} alt="" />
          </div>
          <div className="col2">
            <p>WATCH AS OUR METHOD DIRECTS THOUSANDS OF PEOPLE INTERESTED IN YOUR CONTENT BACK TO YOUR PAGE!</p>
          </div>
        </div>
        {/* <div className="section3-button">
          <button onClick={routeChange}>TRY IT RISK - FREE TODAY</button>
        </div> */}
      </div>
      {/* 4 */}
      <div className='homesection4-main ' >
        {/* < ul class="list-unstyled m-0 d-flex" >
          <li class="mx-5 d-flex align-items-end "> */}
        <h1 class="">BETTER THAN BUYING FOLLOWERS</h1>
        {/* </li>
        </ul > */}
        <div className="sect4-main-row">
          <div className="sect4-row1">
            <div className="section4-img4">
              <img src={imgh4} alt="" />
            </div>
            <div className="sect4-col1">
              <ul>
                <li>Risky to your account</li>
                <li>  Ghost followers </li>
                <li> Useless likes with no engagement</li>
              </ul>
            </div>

          </div>
          <div className="sect4-row2">
            <div className=" section4-img5">
              <img src={imgh5} alt="" />
            </div>
            <div className="sect4-col2">
              <ul>
                <li> Interested in Your content  </li>
                <li>Higher Follower conversion on Other platforms</li>
                <li>Better Quality engagement</li>
                <li>Better brand reputation</li>
                <li>Better metrics to show for brand deals</li>
              </ul>
            </div>
          </div>
        </div>
        <div className='section4-pgh'>
          <p>When you buy followers or likes, you risk getting spammed, and wasting your money, or getting banned. With Top Social, we keep your account safe. We’ve helped 10,000 people grow their followers and boost their engagement organically as they continue to grow their platforms!</p>
        </div>
        <div className="section4-button">
          <button onClick={routeChange}>TRY IT RISK - FREE TODAY</button>
        </div>
        <div className='sect4-features'>
          <h2 className='text-a-c'> #1 FEATURES OF TOP SOCIAL</h2>
          <div className="feature-row1">
            <div className="feat-col1">
              <img src={imgh6} alt="" />
            </div>
            <div className="feat-col2">
              <h3>RAPID GROWTH</h3>
              <p>WE ARE THE FASTEST, MOST TRUSTED GROWTH SERVICE ON THE MARKET. WE FOCUS ON DELIVERING QUALITY RESULTS, FAST!</p>
            </div>

          </div>
          <div className="feature-row2">
            <div className="feat-col1">
              <img src={imgh7} alt="" />
            </div>
            <div className="feat-col2">
              <h3>TARGET AUDIENCE</h3>
              <p>WE USE OUR ARTIFICIAL INTELLIGENCE TO FIND AND ENGAGE YOUR TARGET AUDIENCE USING HASHTAG AND ACCOUNT TARGETING</p>
            </div>
          </div>
          <div className="feature-row3">
            <div className="feat-col1">
              <img src={imgh8} alt="" />
            </div>
            <div className="feat-col2">
              <h3>FITER PROFILE</h3>
              <p>OUR PROGRAM WILL ENGAGE WITH THE FOLLOWERS OF YOUR COMPETITION OR OF PROFILES THAT SHARE CONTENT SIMILAR TO YOURS AND BRING THEM TO YOU!</p>
            </div>
          </div>
        </div>


      </div>
      {/* 5 pricing */}
      <div className="homesection5-main text-a-c">
        <h5>PRICING</h5>
        <h3>CHOOSE YOUR PACKAGE</h3>
        <div className='sect5-row'>
          <div className="sect5-col1">
            <div className="sect5-card">
              <h2>STANDARD</h2>
              <p>Start to target and grow your following</p>
              <h1 className='sect5-price'>$19</h1>
              <p>MONTHLY</p>
              <hr className='sect5-hr-line' />
              <p>No Contract, Cancel Anytime
              </p>
              <p className='bold'>40 Tik Tok Targets
              </p>
              <p>Moderate growth speed
              </p>
              <p className='bold'>14-Day Money Back Guarantee
              </p>
              <p>24/ 7 email support
              </p>
              <p className='bold'>Engaged, organic followers
              </p>
              <div className="section4-button">
                <button onClick={routeChange}>TRY IT RISK - FREE TODAY</button>
              </div>
            </div>
          </div>
          <div className="sect5-col1">
            <div className="sect5-card">
              <h2>PREMIUM</h2>
              <p>Boost your growth and Grow your following faster</p>
              <h1 className='sect5-price'>$39</h1>
              <p>MONTHLY</p>
              <hr className='sect5-hr-line ' />
              <p>No Contract, Cancel Anytime     </p>
              <p className='bold'> 80 Tik Tok Targets              </p>
              <p>Faster growth speed</p>
              <p className='bold'>14-Day Money Back Guarantee</p>
              <p>24/ 7 email support</p>
              <p className='bold'>Engaged, organic followers</p>

              <div className="section4-button">
                <button onClick={routeChange}>TRY IT RISK - FREE TODAY</button>
              </div>
            </div>
          </div>
          <div className="sect5-col1">
            <div className="sect5-card">
              <h2>BOOST MAX</h2>
              <p>Ultimate engagement for extreme growth</p>
              <h1 className='sect5-price'>$59</h1>
              <p>MONTHLY</p>
              <hr className='sect5-hr-line' />
              <p>No Contract, Cancel Anytime</p>
              <p className='bold'>  150 Tik Tok Targets </p>
              <p>Maximum growth speed</p>
              <p className='bold'>14-Day Money Back Guarantee</p>
              <p>24/ 7 email support</p>
              <p className='bold'>Engaged, organic followers</p>
              <div className="section4-button">
                <button onClick={routeChange}>TRY IT RISK - FREE TODAY</button>
              </div>
            </div>
          </div>
        </div>

      </div>
      {/* 6 */}
      <div className="homesection6-main">
        <div className='sect6 text-a-c'>
          <h3>HOW MUCH MONEY CAN I MAKE FROM MY INFLUENCER PAGE?</h3>
          <p>With TopSocial, in 6 months you can expect to gain anywhere from 30,000-50,000 followers. After a year, you can expect to gain 100,000+ followers on your social media account . According to the industry average, let’s say you make 2 posts a day and 25% of your posts are sponsored.</p>
        </div>
        <div className="sect6-row">
          <div className="sect6-col1">
            <img src={img9} alt="" className='sect6-img' />
            <h5>Sponsored Post:</h5>
            <p>60 posts x 25% = 15 sponsored posts</p>
            <p>15 x $350 (average price for sponsored post) = $5250</p>
            <h5>Adspend Revenue:</h5>
            <p>60 posts x $60 equivalent adspend per post = $3600</p>
            <div className='text-a-c'>
              <h2 >Total Monthly Earnings</h2>
              <h1 className='h1price'>$8,850</h1>
              <p>PER MONTH</p>
            </div>
          </div>
          <div className="sect6-col2">
            <img src={img11} alt="" className='sect6-img' />
            <h5>Sponsored Post:</h5>
            <p>60 posts x 25% = 15 sponsored posts</p>
            <p>15 x $950+ (average price for sponsored post) = $14,250+</p>
            <h5>Adspend Revenue:</h5>
            <p>60 posts x $150 equivalent adspend per post = $9000</p>
            <div className='text-a-c'>
              <h2 >Total Monthly Earnings</h2>
              <h1 className='h1price'>$23,250+</h1>
              <p>PER MONTH</p>
            </div>
          </div>
        </div>

        <div className='faq'>
          <div className="faq-row">
            <div className="faq-col faq-col-1">
              <h2 className='faq-h2'>WHY YOU NEED REAL FOLLOWERS</h2>
              <p>Social media has billions of users making it the most powerful marketing tool available.
                Your base of followers who engage with your Content gives brands the awareness they are looking for in a partner.
                This gives you more opportunity to communicate with your audience and convert them into lifelong customers.</p>

            </div>
            <div className="faq-col faq-col-2">
              <img src={img13} className="faq-img1" alt="" />
              <div className='faq-col-img2'>
                <img src={img14} className="faq-img2" alt="" />
                <p className="faq-img2-text">Our AI is constantly learning and building your account. Over time, it will get Better at selecting the people most interested in your content </p>
              </div>
            </div>

          </div>
        </div>
        <div className="question">
          <img src={img15} alt=""  />
          <h1>WE HAVE THE ANSWERS</h1>
          <h4>Does Top Social offer any sort of guarantee?<br/><br/>

            What happens after I sign up with Top Social?<br/><br/>

            What can Top Social help me accomplish?<br/><br/>

            Can I cancel my Top Social account at any time?<br/>

            Is this service safe? </h4>
        </div>

        <div className='homesection7-main'>
          <Contact />
        </div>

      </div>

    </div>

  )
}

export default HomeSection1




