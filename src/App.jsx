import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from '@mui/material'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Home } from './pages/Home'
function App() {
  return (
    <Box m="auto">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </Box>
  );
}
//
//    https://gitlab.com/arch41/frontend.git
export default App;
