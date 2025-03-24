import StarshipCard from "../StarshipCard/StarshipCard";

// This component receives a list (array) of starships as a prop
// It maps through each starship and renders a StarshipCard component

const StarshipList = ({ starships }) => {
  // If there are no starships in the array, show a fallback message
  if (!starships.length) return <p>No starships found.</p>;

  return (
    <div>
      {/* Loop through each starship and display it as a card */}
      {starships.map((ship) => (
        // Always provide a unique key when rendering a list in React
        <StarshipCard key={ship.name} starship={ship} />
      ))}
    </div>
  );
};

export default StarshipList;
