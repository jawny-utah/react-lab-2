import React from "react";
import SVG from 'react-inlinesvg';
import Input from "../../Components/Input";

const SendInquiry = () => {
  return (
    <div className="send container">
      <div className="flex">
        <div className="send__image-text">
          <img src="./assets/img/writing-photo.jpg" />
          <div className="send__title">
            Building stellar websites for early startups
          </div>
          <div className="send__subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.
          </div>
        </div>
        <div className="send__form">
          <div className="send__form-title">
            Send inquiry
          </div>
          <div className="send__form-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
          </div>
          <div className="send__input-wrapper">
            <Input name="your_name" placeholder="Your Name" type="text" />
            <Input name="email" placeholder="Email" type="text" />
            <Input name="figma_url" placeholder="Paste your Figma design URL" type="text" />
          </div>
          <div className="button button--gold button--max w-full text-center mt-10">Send an Inquiry</div>
          <div className="send__get-in-touch">
            Get in touch with us
            <SVG src="./assets/icons/right-arrow.svg" />
          </div>
        </div>
      </div>
    </div>
  )
}

export { SendInquiry };
