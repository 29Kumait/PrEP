const trafficLight = {
  possibleStates: ["green", "orange", "red"],
  stateIndex: 0,
};

let cycle = 0;
while (cycle < 2) {
  const currentState = trafficLight.possibleStates[trafficLight.stateIndex];
  console.log("The traffic light is on", currentState);

  // TODO
  // if the color is green, turn it orange
  if(trafficLight.stateIndex === 0){
    trafficLight.stateIndex++
    // if the color is orange, turn it red
  } else if(trafficLight.stateIndex === 1){
    trafficLight.stateIndex++
     // if the color is red, add 1 to cycles and turn it green
  } else if (trafficLight.stateIndex === 2) {
    cycle++; // Increment cycle count
    trafficLight.stateIndex = 0; // Change to green
  }
};