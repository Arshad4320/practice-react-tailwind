import React, { useEffect, useState } from "react";
import Blog from "./Blog";

const Blogs = ({ book, handleBookMark }) => {
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
          book={book}
          handleBookMark={handleBookMark}
          key={blog.id}
          blog={blog}
        />
      ))}
    </div>
  );
};

export default Blogs;
