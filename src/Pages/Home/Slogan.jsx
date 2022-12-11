import React from "react";
import SVG from 'react-inlinesvg';

const Slogan = () => {
  return (
    <div className="bg-blue-50">
      <div className="container slogan">
        <div className="slogan__subtitle">Features</div>
        <div className="slogan__title">Design that solves problems, one product at a time</div>
        <div className="slogan__cases-wrapper">
          <div className="slogan__case">
            <SVG src="./assets/icons/users.svg" />
            <h2>Uses Client First</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="slogan__case">
            <SVG src="./assets/icons/checked.svg" />
            <h2>Two Revision Round</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="slogan__case">
            <SVG src="./assets/icons/pen.svg" />
            <h2>Template Customization</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="slogan__case">
            <SVG src="./assets/icons/question.svg" />
            <h2>24/7 Support</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="slogan__case">
            <SVG src="./assets/icons/clock.svg" />
            <h2>Quick Delivery</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="slogan__case">
            <SVG src="./assets/icons/clipboard.svg" />
            <h2>Hands-on Approach</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export { Slogan };
