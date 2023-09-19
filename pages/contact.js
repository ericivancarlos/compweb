import React from 'react'

export default function contact() {
  return (
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
  )
}
