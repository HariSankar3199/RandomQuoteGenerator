import React from "react";
import { useState } from "react";
import {
  Container,
  Row,
  Col,
  InputGroup,
  Dropdown,
  Form,
  DropdownButton,
} from "react-bootstrap";
import DropdownItem from "react-bootstrap/esm/DropdownItem";

const TagComponent = () => {
  // {selectedTag,onChange}
  const [selectedTag,setSelectedTag]=useState("")
  const handleTagSelect=(eventKey,event)=>{
    setSelectedTag(eventKey)
  }

  return (
    <Container>
      <Row className="m-auto w-25 text-center  ">
        <Col>
          <InputGroup className="m-auto w-75 mb-3">
            <Form.Control
              placeholder={selectedTag || "select a tag"}
              aria-label="tag"
              aria-describedby="basic-addon2"
            />
            {/* <DropdownButton value={selectedTag} onChange={onChange} title="" id="dropdown-button-example"> */}
            <DropdownButton
              value=""
              onChange=""
              title=""
              id="dropdown-button-example"
              onSelect={handleTagSelect}
            >
              <Dropdown.Header>Dropdown Header</Dropdown.Header>
              <Dropdown.Item active value="" eventKey="Tag1">
                Tag1
              </Dropdown.Item>
              <Dropdown.Item value="" eventKey="Tag2">
                Tag2
              </Dropdown.Item>
              <Dropdown.Item value="" eventKey="Tag3">
                Tag3
              </Dropdown.Item>
            </DropdownButton>
          </InputGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default TagComponent;
