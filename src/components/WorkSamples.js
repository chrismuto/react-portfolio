import React, { useState } from "react";

const WorkSamples = () => {
  return (
    <div>
        <nav id="workNav">
      <a className="workCard" id="helpForHire" href="https://protected-taiga-32909.herokuapp.com/" target="_blank">
        <div>
          <p className="wsp">Help for Hire</p>
        </div>
      </a>
      <a className="workCard"  id="recipeRoulette" href="https://chrismuto.github.io/project-01/" target="_blank">
        <div>
          <p className="wsp">Recipe Roulette</p>
        </div>
      </a>
      <a className="workCard" id="weatherApp" href="https://chrismuto.github.io/weatherapp/" target="_blank">
        <div>
          <p className="wsp">Weather Forecast</p>
        </div>
      </a>
      <a className="workCard" id="workScheduler" href="https://chrismuto.github.io/work-day-scheduler/" target="_blank">
        <div>
          <p className="wsp">Workday Planner</p>
        </div>
      </a>
      <a className="workCard" id="commerceBackend" href="https://github.com/chrismuto/commerce-backend" target="_blank">
        <div>
          <p className="wsp">E-commerce platform</p>
        </div>
      </a>
      </nav>
    </div>
  );
};

export default WorkSamples;
