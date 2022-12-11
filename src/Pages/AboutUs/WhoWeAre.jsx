import React from "react";

const WhoWeAre = () => {
  return (
    <div className="container">
      <div className="who-we-are">
        <div className="who-we-are__header">Who we are</div>
        <div className="who-we-are__wrapper">
          <div className="who-we-are__block-wrapper">
            <h2>Goal focussed</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
          <div className="who-we-are__block-wrapper">
            <h2>Continuous improvement</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </div>
      </div>
      <img src="./assets/img/man-in-blue-jacket.png" className="w-full" />
    </div>
  )
}

export { WhoWeAre };
