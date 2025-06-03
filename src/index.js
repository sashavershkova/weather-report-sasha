"use strict";

const state = {
  temperature: 60
}

// TEMPERATURE
const temperature = document.getElementById('tempValue');
const landscape = document.getElementById('landscape')

const updateTemperature = (direction) => {
  if (direction === 'increase') {
    state.temperature += 1;
  } else if (direction === 'decrease') {
    state.temperature -= 1;
  }
  temperature.textContent = state.temperature;

  if (state.temperature >= 80) {
    temperature.style.color = 'red';
    landscape.textContent = '🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂';
  } else if (state.temperature >= 70) {
    temperature.style.color = 'orange';
    landscape.textContent = '🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷';
  } else if (state.temperature >= 60) {
    temperature.style.color = 'yellow';
    landscape.textContent = '🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃';
  } else if (state.temperature >= 50) {
    temperature.style.color = 'green';
    landscape.textContent = '🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲';
  } else if (state.color <= 49) {
    temperature.style.color = 'teal';
    landscape.textContent = '🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲';
  }
};




const registerEventHandlers = () => {
  // increase temperature
  const upButton = document.getElementById('increaseTempControl');
  upButton.addEventListener('click', () => updateTemperature('increase'));
  // decrease temperature
  const downButton = document.getElementById('decreaseTempControl');
  downButton.addEventListener('click', () =>  updateTemperature('decrease'));
};

document.addEventListener('DOMContentLoaded', registerEventHandlers);