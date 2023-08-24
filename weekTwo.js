"use strict";
/**
 * The `trafficLight` object is now no longer a global variable. Instead,
 * it is defined in function `main()` and passed as a parameter to other
 * functions, as and when needed.
 */

function getCurrentState(trafficLight) {
  // TODO
  // Should return the current state (i.e. colour) of the `trafficLight`
  // object passed as a parameter.

  /* Previous-Ex.: const currentState = trafficLight.possibleStates[trafficLight.stateIndex];*/
  return trafficLight.possibleStates[trafficLight.stateIndex];
}

// function getNextStateIndex(trafficLight) {
//   // TODO:
//   // Return the index of the next state of the `trafficLight` such that:
//   if (trafficLight.stateIndex === 0) {
//     return trafficLight.stateIndex++; // Return 0 and then increment to 1
//   } else if (trafficLight.stateIndex === 1) {
//     return trafficLight.stateIndex++; // Return 1 and then increment to 2
//   } else if (trafficLight.stateIndex === 2) {
//     return trafficLight.stateIndex = 0; // Return 2 and set to 0
//   }
// }      It gives all green

function getNextStateIndex(trafficLight) {
  if (trafficLight.stateIndex === 0) {
    return 1; // If the color is green, turn it orange
  } else if (trafficLight.stateIndex === 1) {
    return 2; // If the color is orange, turn it red
  } else if (trafficLight.stateIndex === 2) {
    return 0; // If the color is red, turn it green
  }
}

// This function loops for the number of seconds specified by the `secs`
// parameter and then returns.
// IMPORTANT: This is not the recommended way to implement 'waiting' in
// JavaScript. You will learn better ways of doing this when you learn about
// asynchronous code.
function waitSync(secs) {
  const start = Date.now();
  while (Date.now() - start < secs * 1000) {
    // nothing do to here
  }
}

function main() {
  const trafficLight = {
    possibleStates: ["green", "orange", "red"],
    stateIndex: 0,
  };

  for (let cycle = 0; cycle < 6; cycle++) {
    const currentState = getCurrentState(trafficLight);
    console.log(cycle, "The traffic light is now", currentState);

    waitSync(1); // Wait a second before going to the next state
    trafficLight.stateIndex = getNextStateIndex(trafficLight);
  }
}

main();
/**
 * The output should be:

0 The traffic light is now green
1 The traffic light is now orange
2 The traffic light is now red
3 The traffic light is now green
4 The traffic light is now orange
5 The traffic light is now red

*/
