import { BrowserRouter, Route, Routes } from "react-router-dom";
import Details from "./pages/Details/Details";
import Home from "./pages/Home/Home";
import "./styles/style.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Movies from "./pages/Movies/Movies";
const App = () => {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:uu_id" element={<Details />} />
        <Route path="movies" element={<Movies />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
