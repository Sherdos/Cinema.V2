import React, { useState, useEffect } from "react";
import { Card, Carousel, Container } from "react-bootstrap";
import Stack from "react-bootstrap/Stack";
import axios from "axios";

function MyCard() {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/v1/movie/");
        setCards(response.data);
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
  return (
    <Container>
      <h1 style={{ color: "white" }}>Movie</h1>
      <Stack direction="horizontal" gap={3}>
        {cards.map((card) => (
          <Card
            text="light"
            style={{
              width: "18rem",
              backgroundColor: "#100e19",
              padding: "5px",
              border: "none",
            }}
          >
            <Card.Img
              variant="top"
              style={{ borderRadius: "10px" }}
              src={card.image}
            />
            <Card.Body>
              <Card.Title
                style={{ textDecorationLine: "none" }}
                href="#"
                as={"a"}
              >
                {card.title}
              </Card.Title>
            </Card.Body>
          </Card>
        ))}
      </Stack>
    </Container>
  );
}

export default MyCard;
