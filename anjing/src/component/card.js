import React from "react";
import { Card, Button, Col } from "react-bootstrap";
import {useHistory} from "react-router-dom"

function DogCard(props) {
  const history = useHistory()
  const { dog } = props;
  function handleDirect(){
    history.push(`/${dog}`)
  }

  return (
    <Col l={3} className="my-3">
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{dog}</Card.Title>
          <Button onClick={handleDirect} variant="info">Detail</Button>
        </Card.Body>
      </Card>
    </Col>
  );
}
export default DogCard;
