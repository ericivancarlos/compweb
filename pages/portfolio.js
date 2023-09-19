import React from 'react'

export default function portfolio() {
  return (
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
  )
}
