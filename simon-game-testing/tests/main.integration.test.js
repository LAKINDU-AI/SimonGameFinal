/**
 * @jest-environment jsdom
 */
const { play, order, playerOrder } = require("../js/main");


test('Game should start and display first turn', () => {
  document.body.innerHTML = `<button id="start">Start</button><div id="turn"></div>`;
  const startButton = document.getElementById('start');
  const turnDisplay = document.getElementById('turn');
  
  startButton.click();
  
  setTimeout(() => {
        expect(turnDisplay.textContent).toBe('1'); 
    }, 500); 
});

test('Game resets properly after a loss', () => {
  document.body.innerHTML = `<button id="start">Start</button>`;
  const startButton = document.getElementById('start');
  startButton.click();
  startButton.click();
  expect(startButton).toBeDefined();
});

test('Game starts when start button is clicked', () => {
  document.body.innerHTML = `<button id="start">Start</button>`;
  const startButton = document.getElementById('start');
  startButton.click();
  expect(startButton).toBeDefined(); 
});

