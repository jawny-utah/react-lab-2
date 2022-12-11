import React from "react";

const MissionAndFocus = () => {
  return (
    <div className="bg-gray">
      <div className="mission-and-focus container">
        <div className="mission-and-focus__block-wrapper">
          <div className="flex flex-col gap-4">
            <h3>Our Mission</h3>
            <h2>Inspire, Innovate, Share</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <img src="./assets/img/a-man-standing.png" />
        </div>
        <div className="mission-and-focus__block-wrapper">
          <img src="./assets/img/photo-of-women.png" />
          <div className="flex flex-col gap-4">
            <h3>Our Vision</h3>
            <h2>Laser focus</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export { MissionAndFocus };
