import React from 'react'
import Image from 'next/image'

export default function About() {
  return (
    <section className="who_section layout_padding">
  <div className="container">
    <div className="row">
      <div className="col-md-5">
        <div className="img-box">
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
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrudLorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          </p>
          {/* <div>
            <a href="">Read More</a>
          </div> */}
        </div>
      </div>
    </div>
  </div>
</section>

  )
}
