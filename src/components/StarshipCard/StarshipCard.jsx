// This component receives a "starship" object as a prop
// and displays its details (name, class, manufacturer, and model)

const StarshipCard = ({ starship }) => {
  return (
    <div className="card">
      {/* Display the name of the starship */}
      <h3>{starship.name}</h3>

      {/* Display the starship's class */}
      <p>
        <strong>Class:</strong> {starship.starship_class}
      </p>

      {/* Display the manufacturer of the starship */}
      <p>
        <strong>Manufacturer:</strong> {starship.manufacturer}
      </p>

      {/* Display the model of the starship */}
      <p>
        <strong>Model:</strong> {starship.model}
      </p>
    </div>
  );
};

// Export the component so it can be used in other files
export default StarshipCard;
