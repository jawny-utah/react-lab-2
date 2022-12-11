import React from "react";

import { useNavigate } from "react-router-dom";

import Button from "../../Components/Button";

const Navbar = () => {
  const history = useNavigate();

  return (
    <div className="bg-purple">
      <div className="container navbar">
        <h1 className="navbar__title" onClick={() => history('/')}>Finsweet</h1>
        <div className="navbar__buttons-container">
          <Button additional_classes={"button--text button--no-p"} text="Home" onClick={() => history('/')} />
          <Button additional_classes={"button--text button--no-p"} text="About Us" onClick={() => history('/about_us')} />
          <Button additional_classes={"button--text button--no-p"} text="Features" />
          <Button additional_classes={"button--text button--no-p"} text="Pricing" />
          <Button additional_classes={"button--text button--no-p"} text="FAQ" />
          <Button button_type="outline" button_size="big" text="Login" />
        </div>
      </div>
    </div>
  )
}

export { Navbar };
