import React from "react";
import { delBookmark } from "../redux/action";
import { useSelector, useDispatch } from "react-redux";
import { Row, Col, Card, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../Styles/bookmark.css";

const Bookmark = () => {
  const bookmarks = useSelector((state) => state.handleBookmark);
  const dispatch = useDispatch();

  const handleDeleteBookmark = (_id) => {
    dispatch(delBookmark(_id));
  };

  return (
    <Container className=" mx-0 py-5">
      <Row className="px-3 mb-5">
        <Col className="text-start">
          <Link className="btn btn-outline-none text-light" to="/">Home</Link>
        </Col>
        <Col className="text-end">
       <Link className="btn btn-outline-none text-light" to="/Bookmark"> Bookmarks</Link>
        </Col>
      </Row>
      <Row className="w-75 m-auto mb-5 ">
        <Col className="mb-5 w-25">
          {bookmarks.map((quote) => (
            <div className="m-5">
              <Card className="text-center  ">
              <Card.Body className="Bgcard" key={quote._id}>
                <Card.Text>{quote}</Card.Text>
                {/* <Card.Text>{author}</Card.Text> */}
                {/* <Button
                  variant="primary"
                  onClick={() => handleDeleteBookmark(quote._id)}
                >
                  Remove Bookmark{quote._id}
                </Button> */}
              </Card.Body>
            </Card>
            </div>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default Bookmark;
