import MyNavbar from "./components/MyNavbar";
import MyCard from "./components/MyCard";
import Slider from "./components/Slider";
import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";

function App() {
  return (
    <>
      <div className="App">
        <MyNavbar />

        <Slider />
        
            <MyCard />
      </div>
    </>
  );
}

export default App;
