import { useState } from "react";

// This component handles the search bar and related metadata display

const StarshipSearch = ({
  onSearch, // Function to run when the user searches
  onReset, // Function to run when user wants to reset the search
  resultsCount, // Total starships currently being shown
  lastSearch, // Last search query string
}) => {
  // This holds the user's current search input
  const [input, setInput] = useState("");

  // This holds the previous search input to display to the user
  const [prevSearchTerm, setPrevSearchTerm] = useState("");

  // Called when the form is submitted
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the page from refreshing

    // Only search if input is not empty
    if (input.trim()) {
      onSearch(input); // Call the parent's search function
      setPrevSearchTerm(input); // Store the last searched term
      setInput(""); // Clear the input field
    }
  };

  return (
    <div>
      {/* Display number of results and what was last searched */}
      <p>
        Showing {resultsCount} result{resultsCount !== 1 ? "s" : ""}.
        {prevSearchTerm ? ` Last search: "${prevSearchTerm}".` : " Search for a starship by name."}
      </p>

      {/* Search input form */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          placeholder="Search starships..."
          onChange={(e) => setInput(e.target.value)} // Update input as user types
        />
        <button type="submit">Search</button>
      </form>

      {/* Show reset button only if a search was made */}
      {lastSearch && (
        <button onClick={onReset} style={{ marginTop: "1em" }}>
          Show all starships
        </button>
      )}
    </div>
  );
};

export default StarshipSearch;
