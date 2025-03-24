// This file is responsible for making the API call to get starship data

// This is an async function to fetch or retrieve a list of all starships from the SWAPI (Star Wars API)
export async function fetchAllStarships() {
  try {
    // Use fetch to make a GET request to the SWAPI starships endpoint
    const response = await fetch("https://swapi.dev/api/starships/");

    // If the response is not OK (status not in 200-299 range), we throw an error manually
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Convert the response into JSON format (JavaScript object)
    const data = await response.json();

    // Return the results array which contains all the starships
    return data.results;
  } catch (error) {
    // If anything goes wrong (like network error or bad response), log the error
    console.error("Failed to fetch starships:", error);

    // Return an empty array so the rest of the app can still function
    return [];
  }
}
