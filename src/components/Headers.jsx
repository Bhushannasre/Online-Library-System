import { Link } from "react-router-dom";
import {useSelector} from "react-redux"

function Headers() {
    const cartItems = useSelector((store)=>store.cart.items);
  return (
    <header className="bg-blue-500 text-white p-4 flex justify-between items-center ">
      <h1 className="text-xl font-bold">Online Books Library</h1>
      <nav className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/BrowseBooks">Browse Books</Link>
        <Link to="/AddBooks">Add Books ({cartItems.length})</Link>

      </nav>
    </header>
  );
}

export default Headers;