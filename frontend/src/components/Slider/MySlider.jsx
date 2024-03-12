import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";

// import MySlide from "./MySlide";
import axios from "axios";
import React, { useState, useEffect } from "react";

function MySlider() {
  const [slider, setSliders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/api/v1/slider/"
        );
        setSliders(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  console.log(slider[0].media_slider);
  return (
    <>
      <Carousel>
        {slider[0].media_slider.map((slide) => (
          <Carousel.Item key={slide}>
            <img
              className="d-block w-100 borded"
              src={slide.img}
              alt=" slide"
              style={{ height: "100%", width: "100%" }}
            />
            <Carousel.Caption>
              <Button variant="danger" size="lg" style={{ float: "left" }}>
                Смотреть
              </Button>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
}

export default MySlider;
