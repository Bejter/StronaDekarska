import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router";
import MainPage from "./Pages/MainPage";
import AboutUsPage from "./Pages/AboutUsPage";
import RealisationsPage from "./Pages/RealisationsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/StronaGłówna" element={<MainPage />} />
        <Route path="/Onas" element={<AboutUsPage />} />
        <Route path="/Realizacje" element={<RealisationsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
