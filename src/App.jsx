import React, { useEffect, useState } from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import product from "./product";
import "./App.css";
import AIrpods from "./appleairpodsimg.webp";
import Star from "./star";

const firstName = "Rayen"; // Replace with your first name or an empty string

function App() {
  const [name, setName] = useState("");

  return (
    <Container className="mt-5">
      <div className="mt-3 title">
        <p>Hello, {firstName ? firstName : "there"}!</p>
      </div>
      <Card className="text-center card">
        <Row>
          <Col md={4}>
            <img src={AIrpods} alt="#" />
          </Col>
          <Col md={8}>
            <Card.Body>
              <div className="flexStar">
                <h1>{product.name}</h1>
                <Star />
              </div>
              <p>{product.description}</p>
              <span>{product.price}</span>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
}

export default App;
