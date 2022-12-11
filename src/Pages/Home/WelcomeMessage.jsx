import React from "react";
import SVG from 'react-inlinesvg';

const WelcomeMessage = () => {
  return (
    <div className="bg-purple py-60">
      <div className="welcome container">
        <div className="welcome__wrapper">
          <div className="max-w-xl">
            <div className="welcome__title">Building stellar websites for early startups</div>
            <div className="welcome__subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
            <div className="flex items-center gap-10 mt-12">
              <div className="button button--orange button--big">Start Now</div>
              <div className="button button--orange-text button--flex items-center button--no-p">
                Read More
                <SVG src="./assets/icons/right-arrow.svg" className="w-5 h-5 ml-2" />
              </div>
            </div>
          </div>
          <img src="./assets/img/welcome_photo.jpg" />
        </div>
      </div>
    </div>
  )
}

export { WelcomeMessage };
