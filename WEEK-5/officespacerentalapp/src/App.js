import React from "react";
import officeImage from "./office.jpg";
import "./App.css";

function App() {
  const element = "Office Space";

  const itemName = {
    Name: "DBS",
    Rent: 50000,
    Address: "Chennai"
  };

  const rentStyle = {
    color: itemName.Rent <= 60000 ? "red" : "green"
  };

  return (
      <div className="office-container">
        <h1>{element}, at Affordable Range</h1>

        <img
            src={officeImage}
            width="200"
            height="200"
            alt="Office Space"
        />

        <h1>Name: {itemName.Name}</h1>

        <h3 style={rentStyle}>
          Rent: Rs. {itemName.Rent}
        </h3>

        <h3>
          Address: {itemName.Address}
        </h3>
      </div>
  );
}

export default App;