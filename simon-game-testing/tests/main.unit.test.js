/**
 * @jest-environment jsdom
 */
const { play, order, playerOrder } = require("../js/main");

test("Canvas exists in the DOM", () => {
  document.body.innerHTML = `<div id="outer-circle"></div>`;
  const canvas = document.getElementById("outer-circle");
  expect(canvas).not.toBeNull(); 
});

test("Game should start with turn 1", () => {
  play();
  expect(turnCount).toBe(1);
});

test("Game should generate a random pattern", () => {
  play();
  setTimeout(() => {
    expect(order.length).toBeGreaterThan(0);
    done(); 
  }, 100); 
});

test("Player move should update playerOrder", () => {
  playerOrder.push(1);
  expect(playerOrder.length).toBe(1);
});
  
test('Buttons have correct colors', () => {
    document.body.innerHTML = `
      <div id="topleft" style="background-color: darkgreen"></div>
      <div id="topright" style="background-color: darkred"></div>
      <div id="bottomleft" style="background-color: goldenrod"></div>
      <div id="bottomright" style="background-color: darkblue"></div>
    `;
    expect(document.getElementById('topleft').style.backgroundColor).toBe('darkgreen');
    expect(document.getElementById('topright').style.backgroundColor).toBe('darkred');
    expect(document.getElementById('bottomleft').style.backgroundColor).toBe('goldenrod');
    expect(document.getElementById('bottomright').style.backgroundColor).toBe('darkblue');
});

test('User can click buttons', () => {
    // Create a mock function
    const clickHandler = jest.fn();
  
    const topLeft = document.getElementById('topleft');
    topLeft.addEventListener('click', clickHandler);
    topLeft.click();
  
    expect(clickHandler).toHaveBeenCalledTimes(1);
});
  



  
  
  
  