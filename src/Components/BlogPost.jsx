import React from "react";
import SVG from 'react-inlinesvg';

const BlogPost = ({ image, date, title, description }) => {
  const fullImage = `./assets/img/${image}`

  return (
    <div className="blog">
      <img src={fullImage} />
      <div className="blog__date">{date}</div>
      <div className="blog__title">{title}</div>
      <div className="blog__description">{description}</div>
      <div className="button button--orange-text button--flex items-center button--no-p mt-8">
        Read More
        <SVG src="./assets/icons/right-arrow.svg" className="w-5 h-5 ml-2" />
      </div>
    </div>
  )
}

export default BlogPost
