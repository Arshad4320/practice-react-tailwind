import { useState } from "react";
import Blogs from "./components/blogs/Blogs";
import Navbar from "./components/navbar/Navbar";

function App() {
  const [book, setBook] = useState(false);
  const handleBookMark = (id) => {
    setBook(!book);
  };
  return (
    <>
      <Navbar />

      <div className="flex  text-center">
        <div className="w-[70%]">
          <Blogs book={book} handleBookMark={handleBookMark} />
        </div>
        <div className="w-[30%]">
          <h2>Reading blogs :0</h2>
          <h3>Book marked blogs : 0</h3>
        </div>
      </div>
    </>
  );
}

export default App;
