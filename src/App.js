import React from "react";
import Sidebar from "./Sidebar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <main className="content">
        <h1>Welcome to My Portfolio</h1>
        <p>This is the main content area of the website.</p>
      </main>
    </div>
  );
}

export default App;
