import MyNavbar from "./components/Navbar/MyNavbar";
import Home from "./pages/Home";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import ShowPage from "./pages/ShowPage";
function App() {
  return (
    <>
      <div className="App">
        <Router>
          <MyNavbar />
          <div style={{ marginTop: "56px" }}></div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/show/:uuid" element={<ShowPage />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
