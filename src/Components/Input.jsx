import React from "react";

const Input = ({ classes, type, placeholder, name }) => {
  return (
    <>
      <input className={classes} type={type} placeholder={placeholder} name={name} />
    </>
  )
}

export default Input
