import { FaBookmark, FaRegBookmark } from "react-icons/fa6";

const Blog = ({ blog, handleBookMark, handleReadingTime }) => {
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <img src={blog.cover} alt="Shoes" />
        </figure>
        <div className="flex item-center justify-around mt-10">
          <span>{blog.author}</span>
          <img className="w-10 rounded-full" src={blog.author_img} alt="" />
          <div>
            <FaBookmark onClick={() => handleBookMark(blog)} />
          </div>
        </div>
        <div className="card-body">
          <h2 className="card-title">{blog.title}</h2>
          <div className="flex">
            {blog.hashtags.map((has, i) => (
              <p key={i}>{has}</p>
            ))}
          </div>

          <div className="card-actions justify-end">
            <button
              onClick={() => {
                handleReadingTime(blog.reading_time, blog.id);
              }}
              className="btn btn-primary"
            >
              Mark as read
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
