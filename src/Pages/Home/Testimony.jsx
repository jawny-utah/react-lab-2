import React from "react";
import SVG from 'react-inlinesvg';

const Testimony = () => {
  return (
    <div className="testimony container">
      <div className="w-1/4 flex flex-col mt-8">
        <div className="testimony__title">What our clients say about us</div>
        <div className="testimony__subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.</div>
      </div>
      <div className="w-2/3">
        <div className="testimony__review">
          "The best agency we've worked with so far. They understand our product and are able to add new features with a great focus."
        </div>
        <div className="flex mt-12">
          <div className="testimony__avatar">
            <img src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          </div>
          <div className="flex flex-col ml-4">
            <div className="testimony__name">Jenny Wilson</div>
            <div className="testimony__position">Vice President</div>
          </div>
          <div className="ml-auto gap-3 flex">
            <div>
              <SVG src="./assets/icons/left-chev.svg" />
            </div>
            <div>
              <SVG src="./assets/icons/right-chev.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { Testimony };
