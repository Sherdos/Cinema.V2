import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import MyBreadcrumbExample from "../components/Breadcrumbs/MyBreadcrumbs";

function ShowPage(props) {
  const params = useParams();
  const [card, setCard] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const paths = [
    { title: "Главная", url: "/", is_active: false },
    { title: card.title, url: "", is_active: true },
  ];
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/api/v1/movie/" + params.uuid + "/"
        );
        setCard(response.data);
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
    <>
      <div className="ShowPage">
        <MyBreadcrumbExample paths={paths}></MyBreadcrumbExample>
      </div>
    </>
  );
}

export default ShowPage;
