import React from "react";
import { Card, Button, NavLink } from "react-bootstrap";
import helpForHire from "../assets/helpforhire.jpg";
import recipeRoulette from "../assets/recipe-roulette.jpg";
import weather from "../assets/weather-forecast.jpeg";
import noteTaker from "../assets/noteTaker.jpeg"
import happyHour from "../assets/happyhour.jpg"

const WorkSamples = () => {
  document.title = "Work Samples";
  return (
    <div className="text-center container">
      <Card className="col-11 col-lg-3 d-inline-flex m-3">
        <Card.Img variant="top" src={helpForHire} />
        <Card.Body>
          <Card.Title>Help For Hire</Card.Title>
          <Card.Text>
            This application allows users to create an account on our app and
            allows them to search and post jobs locally.
          </Card.Text>
          <Card.Text>CSS, Javascript, mongoDB, Mongoose, Node.js, Express</Card.Text>
        </Card.Body>
        <Card.Body className="d-flex justify-content-between">
          <NavLink href="https://github.com/chrismuto/Help-for-Hire">
          <Button variant="primary">Github repo</Button>
          </NavLink>
          <NavLink href="https://protected-taiga-32909.herokuapp.com/">
          <Button variant="success">Live demo</Button>
          </NavLink>
        </Card.Body>
      </Card>
      <Card className="col-11 col-lg-3 d-inline-flex m-3">
        <Card.Img variant="top" src={recipeRoulette} />
        <Card.Body>
          <Card.Title>Recipe Roulette</Card.Title>
          <Card.Text>
            This app pulls a random recipe from an API and displays the recipe,
            ingredients list and associated tutorial video.
          </Card.Text>
          <Card.Text>
            CSS, Javascript, jQuery, RESTful API, local storage
          </Card.Text>
        </Card.Body>
        <Card.Body className="d-flex justify-content-between">
        <NavLink href="https://github.com/chrismuto/Recipe-roulette">
          <Button variant="primary">Github repo</Button>
          </NavLink>
          <NavLink href="https://chrismuto.github.io/Recipe-roulette/">
          <Button variant="success">Live demo</Button>
          </NavLink>
        </Card.Body>
      </Card>
      <Card className="col-11 col-lg-3 d-inline-flex m-3">
        <Card.Img variant="top" src={weather} />
        <Card.Body>
          <Card.Title>Weather Forecaster</Card.Title>
          <Card.Text>
            A weather forecasting app that can find the current and five day
            forecasts for any city using two openweathermap APIs to accurately locate weather.
          </Card.Text>
          <Card.Text>CSS, Javascript, RESTful API</Card.Text>
        </Card.Body>
        <Card.Body className="d-flex justify-content-between">
        <NavLink href="https://github.com/chrismuto/weatherapp">
          <Button variant="primary">Github repo</Button>
          </NavLink>
          <NavLink href="https://chrismuto.github.io/weatherapp/">
          <Button variant="success">Live demo</Button>
          </NavLink>
        </Card.Body>
      </Card>
      <Card className="col-11 col-lg-3 d-inline-flex m-3">
        <Card.Img variant="top" src={noteTaker} />
        <Card.Body>
          <Card.Title>PWA text editor</Card.Title>
          <Card.Text>
            This is a text editor that uses a progessive web app service worker to allow a user to download the app for offline work.
          </Card.Text>
          <Card.Text>NodeJS, IDB, Express, Babel, workbox</Card.Text>
        </Card.Body>
        <Card.Body className="d-flex justify-content-between">
        <NavLink href="https://github.com/chrismuto/pwa-text-editor">
          <Button variant="primary">Github repo</Button>
          </NavLink>
          <NavLink href="https://fast-harbor-57378.herokuapp.com/">
          <Button variant="success">Live demo</Button>
          </NavLink>
        </Card.Body>
      </Card>
      <Card className="col-11 col-lg-3 d-inline-flex m-3">
        <Card.Img variant="top" src={happyHour} />
        <Card.Body>
          <Card.Title>Happy Hour</Card.Title>
          <Card.Text>
            Search app that finds happy hour specials using graphQL request and a React frontend
          </Card.Text>
          <Card.Text>MUI, React, Javascript, mongoDB, graphQL</Card.Text>
        </Card.Body>
        <Card.Body className="d-flex justify-content-between">
        <NavLink href="https://github.com/MaestroLuu/Happy-Hour">
          <Button variant="primary">Github repo</Button>
        </NavLink>
          <NavLink href="https://project-happy-hour.herokuapp.com/">
          <Button variant="success">Live demo</Button>
          </NavLink>
        </Card.Body>
      </Card>
    </div>
  );
};

export default WorkSamples;
