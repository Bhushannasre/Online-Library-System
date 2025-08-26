import React from "react"
import { Books } from "../utils/bookData"
import Headers from "./Headers"
import BookCard from "../components/BookCard"
import { useState } from "react"
import { Link } from "react-router-dom"
function BrowserBook(){
     const [searchText, setSearchText] = useState("");
  const [filteredBooks, setFilteredBooks] = useState(Books);

  function handleSearch() {
    console.log("Searching for:", searchText);

    const results = Books.filter((book) =>
      book.title.toLowerCase().includes(searchText.toLowerCase()) ||
      book.author.toLowerCase().includes(searchText.toLowerCase()) 
    );

    console.log(results);
    setFilteredBooks(results);
  }
function refresh(){
  window.location.reload(false);
}
  return (
    <>
      <div className="flex flex-col items-center justify-center mt-3">
        <input
          type="text"
          placeholder="Search books..."
          className="p-3 bg-gray-200 border text-2xl rounded w-100"
          onChange={(e) => setSearchText(e.target.value)}  
        />
        <button
          className="bg-blue-500 hover:bg-blue-800 border mt-2 rounded px-3 py-1 mb-3 text-white"
          onClick={handleSearch}
        >
          Search
        </button>
        <button   className="bg-green-500 hover:bg-green-800 border rounded px-3 py-1 mb-3 text-white"
          onClick={refresh}>Refresh</button>
      </div>

      <BookCard bookData={filteredBooks} />
    </>
  )
}
export  default BrowserBook;