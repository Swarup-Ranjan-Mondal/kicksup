import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import TheJourneyScreen from "./screens/TheJourneyScreen";
import TeamScreen from "./screens/TeamScreen";
import StoreScreen from "./screens/StoreScreen";
import ContactScreen from "./screens/ContactScreen";

const App = () => {
  return (
    <Router>
      {/* Serving the Header component for all urls */}
      <Header />

      <main>
        {/* Serving different contents (or Screens) for different urls */}
        <Routes>
          <Route path="" element={<HomeScreen />} exact />
          <Route path="thejourney" element={<TheJourneyScreen />} exact />
          <Route path="team" element={<TeamScreen />} exact />
          <Route path="store" element={<StoreScreen />} exact />
          <Route path="contact" element={<ContactScreen />} exact />
        </Routes>
        {/** **/}
      </main>
    </Router>
  );
};

export default App;
