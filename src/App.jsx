import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <div id="container">
        <Hero />
      </div>
    </>
  );
}

export default App;
