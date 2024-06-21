import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import HomePage from "./components/HomePage";
import Iscrivitiform from "./components/Iscrivitiform";



function App() {
  return (
   <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/iscriviti" element={<Iscrivitiform />} />
    </Routes>
   </Router>
  );
}

export default App;