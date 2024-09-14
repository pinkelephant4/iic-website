import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Campus from "./pages/Campus";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ambassador" element={<Campus />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
