// Home.jsx
import { Link } from "react-router-dom";
import { Books } from "../utils/bookData";

function Home() {
  // get unique categories from books
  const categories = [...new Set(Books.map((book) => book.category))];

  return (
    <div className="p-6 text-center">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">📚 Welcome to Online Library</h1>

      {/* Categories */}
      <h2 className="text-2xl font-semibold mb-4">Categories</h2>
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {categories.map((cat, idx) => (
          <Link
            key={idx}
            to={`/books/${cat}`}
            className="bg-blue-100 hover:bg-blue-300 text-blue-800 px-4 py-2 rounded-lg shadow"
          >
            {cat}
          </Link>
        ))}
      </div>

      {/* Popular Books */}
      <h2 className="text-2xl font-semibold mb-4">Popular Books</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {Books.slice(0, 3).map((book) => (
          <div key={book.id} className="bg-gray-100 p-4 rounded-xl shadow">
            <h3 className="font-bold">{book.title}</h3>
            <p className="text-gray-600">{book.author}</p>
            <Link
              to={`/book/${book.id}`}
              className="text-blue-600 underline mt-2 block"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
