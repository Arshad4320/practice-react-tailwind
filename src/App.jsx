import { useState } from "react";
import Blogs from "./components/blogs/Blogs";
import Navbar from "./components/navbar/Navbar";

function App() {
  const [bookMarked, setBookMarked] = useState([]);
  console.log(bookMarked);
  const [readingTime, setReadingTime] = useState(0);
  const handleReadingTime = (time, id) => {
    setReadingTime(readingTime + time);
    handleMark(id);
  };
  const handleBookMark = (blog) => {
    setBookMarked([...bookMarked, blog]);
  };
  const handleMark = (id) => {
    const remainingMark = bookMarked.filter((data) => data.id !== id);
    setBookMarked(remainingMark);
  };
  return (
    <>
      <Navbar />

      <div className="flex  text-center">
        <div className="w-[70%]">
          <Blogs
            handleReadingTime={handleReadingTime}
            handleBookMark={handleBookMark}
          />
        </div>
        <div className="w-[30%]">
          <h2>Reading time :{readingTime}</h2>
          <h2>Book Mark count :{bookMarked.length}</h2>
          {bookMarked.map((data, i) => (
            <h3 key={i}>
              {" "}
              <p className="bg-blue-600 text-white m-2 p-2 shadow">
                {data.title}
              </p>
            </h3>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
