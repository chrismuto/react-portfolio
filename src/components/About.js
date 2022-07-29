import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import profile from "../assets/profile.jpg";

const styles = {
    cardBackground: {
        backgroundColor: "rgba(255, 255, 255, 0.7)",
    },
    cardBackgroundShort: {
        backgroundColor: "rgba(255, 255, 255, 0.7)",
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
          <Card.Text className="d-flex justify-content-around">
                CSS |
                w3CSS |
                Bootstrap |
                React-bootstrap |
                Javascript |
                Jquery |
                Express |
                NodeJS |
                React |
                Handlebars |
                RESTful APIs |
                mySQL |
                noSQL |
                sequelize |
                MongoDB |
                Mongoose |
                Inquirer |
                Jest |
                GraphQL |
                Insomnia |
                Apollo Sandbox
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default About;
