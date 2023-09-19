import React from 'react'
import Image from 'next/image'

export default function footer() {
  return (
    <>
    <>
  {/* info section */}
  <section className="info_section ">
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <div className="info_contact">
            <h5>About Shop</h5>
            <div>
              <div className="img-box">
                <Image src="/images/location-white.png" alt="footer1" width={18} height={24} quality={100} />
              </div>
              <p>Address</p>
            </div>
            <div>
              <div className="img-box">
                <Image src="/images/telephone-white.png" alt="footer2" width={12} height={22} quality={100} />
              </div>
              <p>+01 1234567890</p>
            </div>
            <div>
              <div className="img-box">
                <Image src="/images/envelope-white.png" alt="footer3" width={19} height={15} quality={100} />
              </div>
              <p>demo@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="info_info">
            <h5>Informations</h5>
            <p>
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt
            </p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="info_insta">
            <h5>Instagram</h5>
            <div className="insta_container">
              <div>
                <a href="">
                  <div className="insta-box b-1">
                    <Image src="/images/insta.png" alt="footerprof" width={21} height={25} quality={100} />
                  </div>
                </a>
                <a href="">
                  <div className="insta-box b-2">
                  <Image src="/images/insta.png" alt="footerprof" width={21} height={25} quality={100} />
                  </div>
                </a>
              </div>
              <div>
                <a href="">
                  <div className="insta-box b-3">
                  <Image src="/images/insta.png" alt="footerprof" width={21} height={25} quality={100} />
                  </div>
                </a>
                <a href="">
                  <div className="insta-box b-4">
                  <Image src="/images/insta.png" alt="footerprof" width={21} height={25} quality={100} />
                  </div>
                </a>
              </div>
              <div>
                <a href="">
                  <div className="insta-box b-3">
                  <Image src="/images/insta.png" alt="footerprof" width={21} height={25} quality={100} />
                  </div>
                </a>
                <a href="">
                  <div className="insta-box b-4">
                  <Image src="/images/insta.png" alt="footerprof" width={21} height={25} quality={100} />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="info_form ">
            <h5>Newsletter</h5>
            <form action="">
              <input type="email" placeholder="Enter your email" />
              <button>Subscribe</button>
            </form>
            <div className="social_box">
              <a href="">
              <Image src="/images/fb.png" alt="footerprof" width={30} height={30} quality={100} />
              </a>
              <a href="">
                <Image src="/images/twitter.png" alt="footerprof" width={30} height={30} quality={100} />
              </a>
              <a href="">
                <Image src="/images/linkedin.png" alt="footerprof" width={30} height={30} quality={100} />
              </a>
              <a href="">
                <Image src="/images/youtube.png" alt="footerprof" width={30} height={30} quality={100} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* end info_section */}
  {/* footer section */}
  <section className="container-fluid footer_section">
    <p>
      © 2020 All Rights Reserved By
      <a href="#">Free Html Templates</a>
    </p>
  </section>
  {/* footer section */}
</>

</>

  )
}
