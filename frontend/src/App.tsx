import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router";
import MainPage from "./Pages/MainPage";
import AboutUsPage from "./Pages/AboutUsPage";
import RealisationsPage from "./Pages/RealisationsPage";
import ContactPage from "./Pages/ContactPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/o-nas" element={<AboutUsPage />} />
        <Route path="/realizacje" element={<RealisationsPage />} />
        <Route path="/kontakt" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
