import React from "react";
import SVG from 'react-inlinesvg';

const Benefits = () => {
  return (
    <div className="benefits container">
      <h2>The benefits of working with us</h2>
      <div className="flex gap-8 mt-12">
        <div className="benefits__block-wrapper">
          <SVG
            src="./assets/icons/write.svg" />
          <h3>Customize with ease</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.
          </p>
        </div>
        <div className="benefits__block-wrapper">
        <SVG src="./assets/icons/ruler.svg" />
          <h3>Perfectly Responsive</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.
          </p>
        </div>
        <div className="benefits__block-wrapper">
          <SVG src="./assets/icons/users.svg" />
          <h3>Friendly Support</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.
          </p>
        </div>
      </div>
    </div>
  )
}

export { Benefits };
