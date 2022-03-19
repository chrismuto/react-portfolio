import React from "react";
import { Card, Button } from "react-bootstrap";
import helpForHire from "../assets/helpforhire.jpg"
import weather from "../assets/weather-forecast.jpeg"

const WorkSamples = () => {
  document.title = "Work Samples";
  return (
    <div className="d-flex justify-content-center">
      <Card className="col-3 m-3">
  <Card.Img variant="top" src={helpForHire} />
  <Card.Body>
    <Card.Title>Help For Hire</Card.Title>
    <Card.Text>
    This application allows users to create an account on our app and allows them to search and post jobs locally.
    </Card.Text>
    <Card.Text>
    CSS, Javascript, mongoDB, Mongoose, express
    </Card.Text>
    </Card.Body>
    <Card.Body className="d-flex justify-content-between">
    <Button variant="primary">Github repo</Button>
    <Button variant="success">Live demo</Button>
  </Card.Body>
</Card>
<Card className="col-3 m-3">
  <Card.Img variant="top" src={weather} />
  <Card.Body>
    <Card.Title>Weather Forecaster</Card.Title>
    <Card.Text>
    A weather forecasting app that can find the current and five day forecasts for any city using the openweathermap api
    </Card.Text>
    <Card.Text>
    CSS, Javascript, RESTful API
    </Card.Text>
    </Card.Body>
    <Card.Body className="d-flex justify-content-between">
    <Button variant="primary">Github repo</Button>
    <Button variant="success">Live demo</Button>
  </Card.Body>
</Card>
    </div>
    // <div>
    //     <nav id="workNav">
    //   <a className="workCard" id="helpForHire" href="https://protected-taiga-32909.herokuapp.com/" target="_blank">
    //     <div>
    //       <p className="wsp">Help for Hire</p>
    //     </div>
    //   </a>
    //   <a className="workCard"  id="recipeRoulette" href="https://chrismuto.github.io/project-01/" target="_blank">
    //     <div>
    //       <p className="wsp">Recipe Roulette</p>
    //     </div>
    //   </a>
    //   <a className="workCard" id="weatherApp" href="https://chrismuto.github.io/weatherapp/" target="_blank">
    //     <div>
    //       <p className="wsp">Weather Forecast</p>
    //     </div>
    //   </a>
    //   <a className="workCard" id="workScheduler" href="https://chrismuto.github.io/work-day-scheduler/" target="_blank">
    //     <div>
    //       <p className="wsp">Workday Planner</p>
    //     </div>
    //   </a>
    //   <a className="workCard" id="commerceBackend" href="https://github.com/chrismuto/commerce-backend" target="_blank">
    //     <div>
    //       <p className="wsp">E-commerce platform</p>
    //     </div>
    //   </a>
    //   </nav>
    // </div>
  );
};

export default WorkSamples;
