import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import TheJourneyScreen from "./screens/TheJourneyScreen";
import TeamScreen from "./screens/TeamScreen";
import StoreScreen from "./screens/StoreScreen";
import ContactScreen from "./screens/ContactScreen";

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="" element={<HomeScreen />} exact />
          <Route path="thejourney" element={<TheJourneyScreen />} exact />
          <Route path="team" element={<TeamScreen />} exact />
          <Route path="store" element={<StoreScreen />} exact />
          <Route path="contact" element={<ContactScreen />} exact />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
