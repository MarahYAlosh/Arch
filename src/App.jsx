import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Services } from "./pages/Services";
import { Works } from "./pages/Works";
import { Properties } from "./pages/Properties";
import { DetailProperty } from "./pages/DetailProperty";
import { Contact } from "./pages/Contact";
function App() {
  return (
    <Box m="auto">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Works />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/properties/detail" element={<DetailProperty />} />
        </Routes>
        <Footer />
      </Router>
    </Box>
  );
}
export default App;
