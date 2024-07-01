import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import HomePage from "./components/HomePage";
import Iscrivitiform from "./components/Iscrivitiform";
import { Login } from "./components/Login";



function App() {
  return (
   <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/iscriviti" element={<Iscrivitiform />} />
      <Route path="/login" element={<Login />} />
    </Routes>
   </Router>
  );
}

export default App;