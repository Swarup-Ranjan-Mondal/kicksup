import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import TheJourneyScreen from "./screens/TheJourneyScreen";
import TeamScreen from "./screens/TeamScreen";
import ContactScreen from "./screens/ContactScreen";

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="thejourney" element={<TheJourneyScreen />} exact />
          <Route path="team" element={<TeamScreen />} exact />
          <Route path="contact" element={<ContactScreen />} exact />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
