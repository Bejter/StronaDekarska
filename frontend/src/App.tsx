import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router";
import MainPage from "./Pages/MainPage";
import AboutUsPage from "./Pages/AboutUsPage";
import RealisationsPage from "./Pages/RealisationsPage";
import ContactPage from "./Pages/ContactPage";
import SeoMetadata from "./Components/SeoMetadata";
import PrivacyPage from "./Pages/PrivacyPage";

function App() {
  return (
    <Router>
      <SeoMetadata />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/o-nas" element={<AboutUsPage />} />
        <Route path="/realizacje" element={<RealisationsPage />} />
        <Route path="/kontakt" element={<ContactPage />} />
        <Route path="/polityka-prywatnosci" element={<PrivacyPage />} />
      </Routes>
    </Router>
  );
}

export default App;
