import { useParams, Link } from "react-router-dom";
import { Books } from "../utils/bookData";

function CategoryBooks() {
  const { category } = useParams();

  // filter books by category (case insensitive)
  const filteredBooks = Books.filter(
    (b) => b.category.toLowerCase() === category.toLowerCase()
  );

  if (filteredBooks.length === 0) {
    return (
      <div className="text-center mt-10">
        <h1 className="text-2xl font-bold text-red-600">No books found!</h1>
        <p className="text-gray-600 mt-2">
          We couldn’t find any books in <b>{category}</b> category.
        </p>
        <Link
          to="/BrowseBooks"
          className="mt-4 inline-block bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded"
        >
          🔙 Back to Browse
        </Link>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-center">
        📚 {category} Books
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {filteredBooks.map((book) => (
          <div
            key={book.id}
            className="bg-white p-4 shadow-lg rounded-lg flex flex-col"
          >
            <img
              src={book.image}
              alt={book.title}
              className="h-48 object-cover rounded"
            />
            <h2 className="mt-2 text-lg font-bold">{book.title}</h2>
            <p className="text-gray-600">{book.author}</p>
            <Link
              to={`/book/${book.id}`}
              className="mt-4 bg-blue-500 hover:bg-blue-700 text-white px-3 py-2 rounded text-center"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryBooks;
