import React from "react";
import CalculateScore from "./Components/CalculateScore";

function App() {
  return (
      <div>
        <CalculateScore
            name="Surya"
            school="PSNA College of Engineering and Technology"
            total={480}
            goal={6}
        />
      </div>
  );
}

export default App;