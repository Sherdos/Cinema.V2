import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import "./banner.jpg";

function Slider() {
  return (
    <>
      <Carousel >
        {["Primary", "Secondary", "Success", "Danger", "", "", ""].map(
          (variant) => (
            <Carousel.Item>
              <img
                className="d-block w-100 borded"
                src="src/components/banner.jpg"
                alt="First slide"
                style={{ height: "100%", width: "100%" }}
              />
              <Carousel.Caption>
                <Button variant="danger" size="lg" style={{ float: "left" }}>
                  Смотреть
                </Button>
              </Carousel.Caption>
            </Carousel.Item>
          )
        )}
      </Carousel>
    </>
  );
}

export default Slider;



