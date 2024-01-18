import React, { useState } from "react";

const PreferenceForm = () => {
  const [genre, setGenre] = useState("");
  const [favouriteBooks, setFavouriteBooks] = useState("");
  const [favouriteAuthors, setFavouriteAuthors] = useState("");
  const [recommendedBooks, setRecommendedBooks] = useState([]);

  const handleGenreChange = (event) => {
    setGenre(event.target.value);
  };

  const handleFavouriteBooksChange = (event) => {
    setFavouriteBooks(event.target.value);
  };

  const handleFavouriteAuthorsChange = (event) => {
    setFavouriteAuthors(event.target.value);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <form
        className="space-y-4"
        onSubmit={async (e) => {
          e.preventDefault();
          try {
            const response = await fetch("http://localhost:3001/recommend", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                favouriteBooks,
                favouriteAuthors,
                genre,
              }),
            });

            if (response.ok) {
              const data = await response.json();

              setRecommendedBooks(data); 
            } else {
              // Handle errors in the response
              console.error("Failed to fetch recommendations");
            }
          } catch (error) {
            // Handle network errors
            console.error("Error fetching recommendations:", error);
          }
        }}
      >
        <h1 className="text-lg leading-6 font-medium text-gray-900">
          User Preferences
        </h1>
        <div>
          <label
            htmlFor="genre"
            className="block text-sm font-medium text-gray-700"
          >
            Preferred Genre
          </label>
          <select
            id="genre"
            name="genre"
            value={genre}
            onChange={handleGenreChange}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          >
            <option value="">Select a genre</option>x
            <option value="fiction">Fiction</option>
            <option value="non-fiction">Non-Fiction</option>
            <option value="poetry">Poetry</option>
            <option value="drama">Drama</option>
            <option value="romance">Romance</option>
            <option value="science-fiction">Science Fiction</option>
            <option value="fantasy">Fantasy</option>
            <option value="horror">Horror</option>
            <option value="adventure">Adventure</option>
            <option value="Children's">Children's</option>
            <option value="Satire">Satire</option>
            <option value="Manga/Graphic">Manga/Graphic</option>
            <option value="religious/spiritual">Religious/Spiritual</option>
            <option value="Science/Nature">Science/Nature</option>
            <option value="Cookbook/Food">Cookbook/Food</option>
            <option value="Travel">Travel</option>
            <option value="Self-help/Motivational">
              Self-help/Motivational
            </option>
          </select>
        </div>
        <div>
          <label
            htmlFor="favouriteBooks"
            className="block text-sm font-medium text-gray-700"
          >
            Favourite Books
          </label>
          <input
            type="text"
            id="favouriteBooks"
            name="favouriteBooks"
            value={favouriteBooks}
            onChange={handleFavouriteBooksChange}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          />
        </div>
        <div>
          <label
            htmlFor="favouriteAuthors"
            className="block text-sm font-medium text-gray-700"
          >
            Favourite Authors
          </label>
          <input
            type="text"
            id="favouriteAuthors"
            name="favouriteAuthors"
            value={favouriteAuthors}
            onChange={handleFavouriteAuthorsChange}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          />
        </div>
        <button
          type="submit"
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Submit
        </button>
      </form>
      {recommendedBooks.length > 0 && (
        <div className="">
          <h2>Recommended Books</h2>
          <ul>
            {recommendedBooks.map((book, index) => (
              <li key={index}>{book.title}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default PreferenceForm;
