import React, { useState } from "react";

const WorkSamples = () => {
  return (
    <div>
      <a href="https://protected-taiga-32909.herokuapp.com/" target="_blank">
        <div id="helpForHire">
          <p class="wsp">Help for Hire</p>
        </div>
      </a>
      <a href="https://chrismuto.github.io/project-01/" target="_blank">
        <div id="recipeRoulette">
          <p class="wsp">Recipe Roulette</p>
        </div>
      </a>
      <a href="https://chrismuto.github.io/weatherapp/" target="_blank">
        <div id="weatherApp">
          <p class="wsp">Weather Forecast</p>
        </div>
      </a>
      <a href="https://chrismuto.github.io/work-day-scheduler/" target="_blank">
        <div id="workScheduler">
          <p class="wsp">Workday Planner</p>
        </div>
      </a>
      <a href="https://github.com/chrismuto/commerce-backend" target="_blank">
        <div className="commerceBackend">
          <p class="wsp">E-commerce platform</p>
        </div>
      </a>
    </div>
  );
};

export default WorkSamples;
