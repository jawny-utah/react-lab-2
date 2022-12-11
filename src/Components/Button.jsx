import React from "react";

const Button = ({ button_size, additional_classes, button_type, text, onClick }) => {
  const size = {
    big: "button--big",
    max: "button--max"
  };

  const type = {
    outline: "button--outline"
  };

  const default_class = "button";

  const classes = [default_class, size[button_size], type[button_type], additional_classes].join(" ");

  return (
    <>
      <button className={classes} onClick={onClick}> {text} </button>
    </>
  )
}

export default Button
