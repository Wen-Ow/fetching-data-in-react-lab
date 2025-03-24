import { useEffect, useState } from "react"; // Import React hooks
import "./App.css";
import { fetchAllStarships } from "./services/starshipService"; // Import API call
import StarshipList from "./components/StarshipList/StarshipList"; // List of cards
import StarshipSearch from "./components/StarshipSearch/StarshipSearch"; // Search bar

const App = () => {
  // State to hold all starship data from the API
  const [starshipsData, setStarshipsData] = useState([]);

  // State to hold only the filtered/displayed starships
  const [displayedStarships, setDisplayedStarships] = useState([]);

  // Store the last search string
  const [lastSearch, setLastSearch] = useState("");

  // Fetch starships when the page loads
  useEffect(() => {
    const loadData = async () => {
      const data = await fetchAllStarships();
      setStarshipsData(data); // Save full list
      setDisplayedStarships(data); // Also show full list by default
    };
    loadData(); // Call the inner function
  }, []); // Empty array = run only once after component mounts

  // Function to search starships by name
  const handleSearch = (query) => {
    const lowerQuery = query.toLowerCase(); // Make case-insensitive
    const filtered = starshipsData.filter(
      (ship) => ship.name.toLowerCase().includes(lowerQuery) // Match substring
    );
    setDisplayedStarships(filtered); // Show only matches
    setLastSearch(query); // Save query string
  };

  // Function to reset the search
  const resetSearch = () => {
    setDisplayedStarships(starshipsData); // Show full list again
    setLastSearch(""); // Clear the last search
  };

  return (
    <div className="App">
      <h1>Star Wars Starships</h1>

      {/* Search bar + metadata */}
      <StarshipSearch
        onSearch={handleSearch}
        onReset={resetSearch}
        resultsCount={displayedStarships.length}
        lastSearch={lastSearch}
      />

      {/* Conditional: show loading or results */}
      {displayedStarships.length === 0 ? (
        <p>Loading or no starships found...</p>
      ) : (
        <StarshipList starships={displayedStarships} />
      )}
    </div>
  );
};

export default App;
