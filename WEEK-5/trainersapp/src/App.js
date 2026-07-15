import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Navigate
} from "react-router-dom";

import Home from "./Home";
import TrainerList from "./TrainerList";
import TrainerDetails from "./TrainerDetails";
import "./App.css";

function App() {
  return (
      <BrowserRouter>
        <div className="app">
          <h1>My Academy Trainers App</h1>

          <nav>
            <Link to="/home">Home</Link>
            <Link to="/trainers">Trainers</Link>
          </nav>

          <hr />

          <Routes>
            <Route
                path="/"
                element={<Navigate to="/home" replace />}
            />

            <Route
                path="/home"
                element={<Home />}
            />

            <Route
                path="/trainers"
                element={<TrainerList />}
            />

            <Route
                path="/trainers/:id"
                element={<TrainerDetails />}
            />
          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;