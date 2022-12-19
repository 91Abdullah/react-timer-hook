import "./styles.css";
import React from "react";
import Timer from "./components/Timer";

export default function App() {
  return (
    <div className="App">
      <Timer initialTime={3600} />
    </div>
  );
}
