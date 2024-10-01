import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";

import $ from "jquery";
window.jQuery = $;
window.$ = $;

import Campus from "./pages/Campus";
import Team from "./pages/Team";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Loading from "./components/Loading"; // Import the Loading component
import About from "./pages/About";

function App() {
  const [loading, setLoading] = useState(true); // Manage loading state
  const location = useLocation(); // Get the current route location

  useEffect(() => {
    // Trigger loading on route change or initial load
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false); // Turn off loading after animation duration
    }, 3000); // Adjust time as needed

    return () => clearTimeout(timer); // Cleanup timeout on route change
  }, [location]); // Dependency array to trigger effect on location change

  return (
    <>
      {loading ? (
        <Loading /> // Show loading animation while loading is true
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ambassador" element={<Campus />} />
            <Route path="/about" element={<About />} />
            <Route path="/team" element={<Team />} />
          </Routes>
          <Footer />
        </>
      )}
    </>
  );
}

export default function WrappedApp() {
  return (
    <Router>
      <App />
    </Router>
  );
}
