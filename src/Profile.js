import React from "react"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export default function Profile(props) {
  return (
    <>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.owner.avatar_url} />
      <Card.Body>
        <Card.Title>{props.owner.login}</Card.Title>
        <Card.Text> <strong>Repo name:</strong>
         {props.name}
        </Card.Text>
        <Button href={props.html_url} target="_blank" variant="primary">View Repo</Button>
      </Card.Body>
    </Card>





    </>
  )
}