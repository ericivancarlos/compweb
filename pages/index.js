import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


export default function Home() {
  return (
 <>
  <div className="hero_area">
    <section className=" slider_section position-relative">
      <div className="container">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
        >
          {/* <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to={0}
              className="active"
            />
            <li data-target="#carouselExampleIndicators" data-slide-to={1} />
            <li data-target="#carouselExampleIndicators" data-slide-to={2} />
          </ol> */}
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="row">
                <div className="col">
                  <div className="detail-box">
                    <div>
                      <h2>welcome to</h2>
                      <h1>web agency</h1>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore
                      </p>
                      <div className="">
                        <a href="">Contact us</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row">
                <div className="col">
                  <div className="detail-box">
                    <div>
                      <h2>welcome to</h2>
                      <h1>web agency</h1>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore
                      </p>
                      <div className="">
                        <a href="">Contact us</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row">
                <div className="col">
                  <div className="detail-box">
                    <div>
                      <h2>welcome to</h2>
                      <h1>web agency</h1>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore
                      </p>
                      <div className="">
                        <a href="">Contact us</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  <section className="do_section layout_padding">
    <div className="container">
      <div className="heading_container">
        <h2>What we do</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna
        </p>
      </div>
      <div className="do_container">
        <div className="box arrow-start arrow_bg">
          <div className="img-box">
            <img src="images/d-1.png" alt="" />
          </div>
          <div className="detail-box">
            <h6>Marketing</h6>
          </div>
        </div>
        <div className="box arrow-middle arrow_bg">
          <div className="img-box">
            <img src="images/d-2.png" alt="" />
          </div>
          <div className="detail-box">
            <h6>Development</h6>
          </div>
        </div>
        <div className="box arrow-middle arrow_bg">
          <div className="img-box">
            <img src="images/d-3.png" alt="" />
          </div>
          <div className="detail-box">
            <h6>Html5</h6>
          </div>
        </div>
        <div className="box arrow-end arrow_bg">
          <div className="img-box">
            <img src="images/d-4.png" alt="" />
          </div>
          <div className="detail-box">
            <h6>Css</h6>
          </div>
        </div>
        <div className="box ">
          <div className="img-box">
            <img src="images/d-5.png" alt="" />
          </div>
          <div className="detail-box">
            <h6>Wordpress</h6>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="who_section ">
    <div className="container">
      <div className="row">
        <div className="col-md-5">
          <div className="img-box">
            {/* <img src="images/who-img.jpg" alt="" /> */}
            <Image src="/images/who-img.jpg" alt="Picture of the author" width={396} height={496} quality={100} />
          </div>
        </div>
        <div className="col-md-7">
          <div className="detail-box">
            <div className="heading_container">
              <h2>WHO WE ARE?</h2>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrudLorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud
            </p>
            <div>
              <Link className="abt-btn" href="/about" > Read More</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="work_section layout_padding">
    <div className="container">
      <div className="heading_container">
        <h2>CREATIVE WORKS</h2>
        <p>
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation
        </p>
      </div>
      <div className="work_container layout_padding2">
        <div className="box b-1">
          <img src="images/w-1.png" alt="" />
        </div>
        <div className="box b-2">
          <img src="images/w-2.png" alt="" />
        </div>
        <div className="box b-3">
          <img src="images/w-3.png" alt="" />
        </div>
        <div className="box b-4">
          <img src="images/w-4.png" alt="" />
        </div>
      </div>
    </div>
  </section>
  <section className="target_section layout_padding2">
    <div className="container">
      <div className="row">
        <div className="col-md-3 col-sm-6">
          <div className="detail-box">
            <h2>1000+</h2>
            <h5>Years of Business</h5>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="detail-box">
            <h2>20000+</h2>
            <h5>Projects Delivered</h5>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="detail-box">
            <h2>10000+</h2>
            <h5>Satisfied Customers</h5>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="detail-box">
            <h2>1500+</h2>
            <h5>Cups of Coffee</h5>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="contact_section layout_padding">
    <div className="container">
      <div className="heading_container">
        <h2>Request A Call Back</h2>
      </div>
      <div className="">
        <div className="">
          <div className="row">
            <div className="col-md-9 mx-auto">
              <div className="contact-form">
                <form action="">
                  <div>
                    <input type="text" placeholder="Full Name " />
                  </div>
                  <div>
                    <input type="text" placeholder="Phone Number" />
                  </div>
                  <div>
                    <input type="email" placeholder="Email Address" />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Message"
                      className="input_message"
                    />
                  </div>
                  <div className="d-flex justify-content-center">
                    <button type="submit" className="btn_on-hover">
                      Send
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="map_img-box">
        <img src="images/map-img.png" alt="" />
      </div>
    </div>
  </section>
</>
  )
}
