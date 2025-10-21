import React, { useEffect, useState } from "react";
import Blog from "./Blog";

const Blogs = () => {
  const [item, setItem] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, []);
  return (
    <div>
      {item.map((blog) => (
        <Blog key={blog.id} blog={blog} />
      ))}
    </div>
  );
};

export default Blogs;
