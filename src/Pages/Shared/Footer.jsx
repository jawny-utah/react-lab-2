import React from "react";
import SVG from 'react-inlinesvg';
import Button from "../../Components/Button";

const Footer = () => {
  return (
    <div>
      <div className="bg-purple">
        <div className="footer container">
          <div className="footer__info">
            <div className="w-1/2">
              <div className="footer__title">Finsweet</div>
              <div className="footer__subtitle">We are always open to discuss your project and improve your online presence.</div>
            </div>
            <div className="w-1/3">
              <div className="footer__header">Lets Talk!</div>
              <div className="footer__subheader">We are always open to discuss your project, improve your online presence and help with your UX/UI design challenges.</div>
              <div className="footer__icons-wrapper">
                <SVG src="./assets/icons/instagram.svg" />
                <SVG src="./assets/icons/facebook.svg" />
                <SVG src="./assets/icons/linkedin.svg" />
                <SVG src="./assets/icons/twitter.svg" />
              </div>
            </div>
          </div>
          <div className="footer__contact-info-wrapper">
            <div className="flex flex-col">
              <div className="font-medium text-lg">Email me at</div>
              <div className="text-lg">contact@website.com</div>
            </div>
            <div className="flex flex-col">
              <div className="font-medium text-lg">Call us</div>
              <div className="text-lg">0927 6277 28525</div>
            </div>
          </div>
        </div>
      </div>
      <div className="container flex my-8">
        <div className="font-medium">Copyright 2022, finsweet.com</div>
        <div className="navbar__buttons-container ml-auto">
          <Button additional_classes={"button--text button--no-p"} text="Home" />
          <Button additional_classes={"button--text button--no-p"} text="About Us" />
          <Button additional_classes={"button--text button--no-p"} text="Features" />
          <Button additional_classes={"button--text button--no-p"} text="Pricing" />
          <Button additional_classes={"button--text button--no-p"} text="FAQ" />
        </div>
      </div>
    </div>
  )
}

export { Footer };
