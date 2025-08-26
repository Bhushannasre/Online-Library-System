import Books from "./Books";
import { Link } from "react-router-dom";

function BookCard(props) {
    console.log(props);
  return (
    
    <div   className="grid gap-4 grid-cols-2 p-4">
   {props.bookData.map((book) => (
     <Link  key={book.id} to={`/book/${book.id}`}><Books key={book.id} bookDetails={book} /></Link>
       
      ))}
       
    </div>
  );
}
export default BookCard;