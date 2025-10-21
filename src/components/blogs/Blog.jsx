import { FaBookmark, FaRegBookmark } from "react-icons/fa6";

const Blog = ({ blog, handleBookMark, book }) => {
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
            {book ? (
              <FaBookmark
                onClick={() => {
                  handleBookMark(blog.id);
                }}
              />
            ) : (
              <FaRegBookmark onClick={() => handleBookMark(blog.id)} />
            )}
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
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
