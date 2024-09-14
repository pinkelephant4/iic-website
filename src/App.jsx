import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import Footer from "./Footer";
import Navbar from "./Navbar";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
