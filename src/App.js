import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Card, Row, Col, Container } from "react-bootstrap";
import { useQuery } from "react-query";

function App() {
  const [loading, setLoading] = useState(false);

  const getDataFromUrl = () => {
    const res = axios
      .get("https://api.imgflip.com/get_memes")
      .then((res) => res.data.data.memes);
    return res;
  };
  const { data, isLoading } = useQuery("gallery", getDataFromUrl);

  const renderMemes = () => {
    let items = data.map((post, index) => {
      return (
        <Col className="mt-3" key={index}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={post.url} className="mx-auto" />
            <Card.Body className="d-flex justify-content-center">
              <Button variant="outline-primary" className="full-width">
                {post.name}
              </Button>
            </Card.Body>
          </Card>
        </Col>
      );
    });
    return items;
  };
  const handleClick = () => {
    // setLoading(!loading);
    console.log("click");
  };

  return (
    <>
      <div className="d-flex justify-content-center">
        <Button className="primary btn-md px-5 my-3 mx-3" onClick={handleClick}>
          Load memes
        </Button>
      </div>
      <div></div>
      <div className="d-flex justify-content-center">
        <Container>
          <Row xs={1} md={4}>
            {!isLoading ? renderMemes() : <div></div>}
          </Row>
        </Container>
      </div>
    </>
  );
}

export default App;
