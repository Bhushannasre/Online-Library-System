import { useParams } from "react-router-dom";
import { Books } from "../utils/bookData";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";

function BookDetails() {
  const { id } = useParams();
  const book = Books.find((b) => b.id.toString() === id);
  const dispatch = useDispatch();

  if (!book) {
    return <h1 className="text-center text-red-500 mt-10">Book not found</h1>;
  }

  function handleAddtoCart(item) {
    dispatch(addItem(item));
  }

  function handleRemoveFromCart(item) {
    dispatch(removeItem(item));
  }

  return (
    <div className="flex flex-col items-center justify-center mt-5 p-6">
      <h1 className="text-3xl font-bold mb-6 text-blue-600">📖 {book.title}</h1>

      <div className="bg-gray-100 shadow-lg rounded-2xl p-6 w-full max-w-md text-center space-y-4">
        <img
          src={book.image}
          alt={book.title}
          className="w-40 h-56 object-cover rounded-lg mx-auto shadow-md"
        />

        <h2 className="text-xl font-semibold">{book.author}</h2>
        <p className="text-gray-600">Genre: {book.category}</p>
        <p className="text-gray-600">Year: {book.year}</p>
          <p className="text-yellow-500">⭐ Rating: {book.rating || "4.5"}</p>
        <p className="text-gray-700">{book.description}</p>

        <button
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow mr-2"
          onClick={() => handleAddtoCart(book)}
        >
          Add Book
        </button>
        <button
          className="mt-4 bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded-lg shadow"
          onClick={() => handleRemoveFromCart(book)}
        >
          Remove Book
        </button>
      </div>
    </div>
  );
}

export default BookDetails;
