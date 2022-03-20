import React, { useState } from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import profile from "../assets/profile.jpg";

const styles = {
    cardBackground: {
        backgroundColor: "rgba(125, 125, 125, 0.2)",
    },
    cardBackgroundShort: {
        backgroundColor: "rgba(125, 125, 125, 0.2)",
        height: "50%",
    },
}

const About = () => {
  document.title = "About Me";
  return (
    <div className="d-flex justify-content-center">
      <Card className="m-5 col-3" style={styles.cardBackground}>
        <Card.Img variant="top" src={profile} />
        <Card.Body>
          <Card.Title className="text-center">Chris Muto</Card.Title>
          <Card.Text>
            As a recent graduate of a full stack web development boot camp, I am
            hoping to take the skills I have learned over the past few months
            and improve on them through practical applications and work in a
            professional environment.
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem style={styles.cardBackground}>Field: Full stack web development</ListGroupItem>
          <ListGroupItem style={styles.cardBackground}>Location: San Diego</ListGroupItem>
        </ListGroup>
      </Card>
      <Card className="m-5 col-5" style={styles.cardBackgroundShort}>
        <Card.Body>
          <Card.Title className="text-center m-3 border-bottom border-dark aboutCard">Technical Proficiencies</Card.Title>
          <Card.Text className="d-flex justify-content-around fs-5">
            <ul>
                <li>CSS</li>
                <li>w3CSS</li>
                <li>Bootstrap</li>
                <li>React-bootstrap</li>
                <li>Javascript</li>
                <li>Jquery</li>
                <li>Express</li>
                <li>NodeJS</li>
                <li>React</li>
                <li>Handlebars</li>
                <li>RESTful APIs</li>
            </ul>
            <ul>
                <li>mySQL</li>
                <li>noSQL</li>
                <li>sequelize</li>
                <li>MongoDB</li>
                <li>Mongoose</li>
                <li>Inquirer</li>
                <li>Jest</li>
                <li>GraphQL</li>
                <li>Insomnia</li>
                <li>Apollo Sandbox</li>
            </ul>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default About;
