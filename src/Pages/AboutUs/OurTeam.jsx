import React from "react";

const OurTeam = () => {
  return (
    <div className="bg-gray">
      <div className="team container">
        <h2>Meet our team</h2>
        <div className="flex gap-8 justify-between">
          <div className="team__block-wrapper">
            <img src="./assets/img/serious-man.png" />
            <h3>John Smith</h3>
            <p>CEO</p>
          </div>
          <div className="team__block-wrapper">
            <img src="./assets/img/transgender-model-touching.png" />
            <h3>Simon Adams</h3>
            <p>CTO</p>
          </div>
          <div className="team__block-wrapper">
            <img src="./assets/img/man-in-white-shirt.png" />
            <h3>Paul Jones</h3>
            <p>Design Lead</p>
          </div>
          <div className="team__block-wrapper">
            <img src="./assets/img/man-in-white-shirt.png" />
            <h3>Paul Jones</h3>
            <p>Design Lead</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export { OurTeam };
