import React from "react";
import "../Styles/home.css";
import { useState, useEffect } from "react";
import { Link} from "react-router-dom";
import {
  Row,
  Col,
  Container,
  Button,
  Card,
 
} from "react-bootstrap";
import BookmarkButton from "./BookmarkButton";
import TagComponent from "./TagComponent";





const Home = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  // const [selectedTag, setSelectedTag] = useState("");
  // const handleTagChange = (event) => {
  //   setSelectedTag(event.target.value);
  //   dispatch(getRandomQuote(event.target.value));
  // };

  let fetchdata = async () => {
    let response = await fetch(`https://api.quotable.io/random`);
  
    let data = await response.json();
    console.log(data);
    setQuote(data.content);
    setAuthor(data.author);
    
  };
  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <Container fluid className="px-0 py-5 main">
      <Row className="px-3 mb-5">
        <Col className="text-start">
          <Link className="btn btn-outline-none text-light">Home</Link>
        </Col>
        <Col className="text-end">
       <Link className="btn btn-outline-none text-light" to="/Bookmark"> Bookmarks</Link>
        </Col>
      </Row>
      <Row className="w-50 m-auto mb-5">
        <Col>
          <Card className="text-center ">
            <Card.Body className="Bgcard">
              <Card.Text>{quote}</Card.Text>
              <Card.Text>
                {author}{" "}
               <BookmarkButton quote={quote} />
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <TagComponent/>
      
      <Row className="m-auto text-center">
        <Col>
          <Button variant="outline-success" onClick={fetchdata}>
            NextQuote
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
