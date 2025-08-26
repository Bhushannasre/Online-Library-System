function Books(props){
    return (
        <div className="border p-4 rounded shadow hover:shadow-lg transition duration-300 flex gap-4 items-center bg-gray-100 ">
              <img src={props.bookDetails.image} alt=""  className="w-40 h-40" />
              <div>
                <h2>Title:{props.bookDetails.title}</h2>
                <h3>Author:{props.bookDetails.author}</h3>
                <p>Description:{props.bookDetails.description}</p>
                <p>Rating: {props.bookDetails.rating}</p>
                <p>Category: {props.bookDetails.category}</p>

              </div>
        </div>
    )
}
export default Books;