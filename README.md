📚 Online Library System

A React-based Online Library System where users can explore categories, browse books, and view detailed information.

🚀 Features

Home Page

Welcome message

Book categories (Fiction, Non-Fiction, Sci-Fi, etc.)

Popular books list

Navigation bar (Home, Browse Books)

Browse Books Page

List of books filtered by category

Dynamic routing (/books/:category)

Search books by title or author

"View Details" link for each book

Book Details Page

Displays book title, author, description, year, rating

Includes book image

Back navigation to Browse Books

404 Page

Custom error page for invalid routes

Link to go back to Home

🛠️ Tech Stack

React (Vite setup)

React Router DOM v6

Tailwind CSS

Dummy data (static JSON from bookData.js)

Redux (store setup in appStore.js with cartSlice.js for extendibility)

📂 Folder Structure
src/
 ├── assets/                # (for images/icons if needed)
 ├── components/            # All UI components
 │    ├── BookCard.jsx
 │    ├── BookDetails.jsx
 │    ├── Books.jsx
 │    ├── BrowserBook.jsx
 │    ├── CategoryBooks.jsx
 │    ├── Error.jsx
 │    ├── Headers.jsx
 │    └── Home.jsx
 ├── utils/
 │    ├── appStore.js       # Redux store setup
 │    ├── bookData.js       # Static dummy books dataset
 │    └── cartSlice.js      # Example slice (for state management)
 ├── App.css
 ├── App.jsx                # Root component
 ├── index.css
 ├── main.jsx               # Entry point with RouterProvider

▶️ Getting Started
1. Clone the repo
git clone https://github.com/Bhushannasre/Online-Library-System.git
cd online-library-System

2. Install dependencies
npm install

3. Start development server
npm run dev

4. Open in Browser

Go to 👉 http://localhost:5173

📝 Notes

This version only uses static dummy data for books.

The Redux store (appStore.js, cartSlice.js) is set up for extension (adding books, managing cart, etc.), but is currently not used for the Add Book functionality.

You can extend AddBooks later to push data into Redux.
