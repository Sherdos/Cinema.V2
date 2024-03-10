import React, { useState, useEffect } from "react";
import { Card, Carousel, Container } from "react-bootstrap";
import axios from "axios";
import MyCard from "./MyCard";
import "./Cards.css";

function MyCardGroup() {
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
      <h1 style={{ color: "white" }}>Фильмы</h1>
      <div className="cards">
        <MyCard cards={cards} />
      </div>
    </Container>
  );
}

export default MyCardGroup;
