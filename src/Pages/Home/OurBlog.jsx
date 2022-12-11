import React from "react";
import BlogPost from "../../Components/BlogPost";

const date = "19 Jan 2022"
const title = "How one Webflow user grew his single person consultancy from $0-100K in 14 months"
const desciption = "See how pivoting to Webflow changed one person's sales strategy and allowed him to attract"

const blog_posts = [
  { date: date, image: "arabic-businessman.png", title: title, desciption: desciption },
  { date: date, image: "woman-in-white.png", title: title, desciption: desciption },
  { date: date, image: "apple-monitors.png", title: title, desciption: desciption }
]

const OurBlog = () => {
  return (
    <div className="our-blog container">
      <div className="our-blog__title">Our blog</div>
      <div className="our-blog__wrapper">
        {blog_posts.map((blog) => {
          return <BlogPost title={blog['title']} image={blog['image']} description={blog['desciption']} date={blog['date']} />
        })}
      </div>
    </div>
  )
}

export { OurBlog };

