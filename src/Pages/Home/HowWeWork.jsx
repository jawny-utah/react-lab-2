import React from "react";
import SVG from 'react-inlinesvg';

const HowWeWork = () => {
  return (
    <div className="hww container">
      <div className="hww__description">
        <div className="hww__title">How we work</div>
        <div className="hww__subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</div>
        <div className="button button--orange-text button--flex items-center mt-5 button--no-p">
          Keep in touch with us
          <SVG
            src="./assets/icons/right-arrow.svg"
            className="w-5 h-5 ml-2" />
        </div>
      </div>
      <div className="hww__points-wrapper">
        <div className="hww__point">
          <div className="hww__number">1</div>
          <div className="hww__point-title">Strategy</div>
          <div className="hww__point-desc">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</div>
        </div>
        <div className="hww__point">
          <div className="hww__number">2</div>
          <div className="hww__point-title">Wireframing</div>
          <div className="hww__point-desc">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</div>
        </div>
        <div className="hww__point">
          <div className="hww__number">3</div>
          <div className="hww__point-title">Design</div>
          <div className="hww__point-desc">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</div>
        </div>
        <div className="hww__point">
          <div className="hww__number">4</div>
          <div className="hww__point-title">Development</div>
          <div className="hww__point-desc">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</div>
        </div>
      </div>
    </div>
  )
}

export { HowWeWork };
