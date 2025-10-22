import React, { useEffect, useState } from "react";
import Blog from "./Blog";

const Blogs = ({ handleBookMark, handleReadingTime }) => {
  const [item, setItem] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, []);
  return (
    <div className="grid grid-cols-2">
      {item.map((blog) => (
        <Blog
          handleBookMark={handleBookMark}
          handleReadingTime={handleReadingTime}
          key={blog.id}
          blog={blog}
        />
      ))}
    </div>
  );
};

export default Blogs;
