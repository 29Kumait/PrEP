const trafficLight = {
    state: "green",
  };
  
  let rotations = 0;
  while (rotations < 2) {
    const currentState = trafficLight.state;
    console.log("The traffic light is on", currentState);

    // TODO:
     // if the color is green, turn it orange
     if (trafficLight.state === 'green') {
     trafficLight.state = 'orange';
    // if the color is orange, turn it red
    } else if (trafficLight.state === 'orange') {
       trafficLight.state = 'red';   
     // if the color is red, add 1 to rotations
    } else if (trafficLight.state === 'red') {
     rotations++;
     // and turn it green
    trafficLight.state = 'green';
    }    
  };


  //OR:

  const trafficLight = {
    state: "green",
  };
  
  let rotations = 0;
  while (rotations < 2) {
    const currentState = trafficLight.state;
    console.log("The traffic light is on", currentState);
  
    // TODO
    // if the color is green, turn it orange
    if (currentState === 'green') {
    trafficLight.stat = 'orange';
    // if the color is orange, turn it red
    } else if (currentState === 'orange') {
    trafficLight.stat = 'red';
    // if the color is red,
     
    }  else if (currentState === 'red') {
      // add 1 to rotations
       rotations++;
      // and turn it green
    trafficLight.stat = 'green';
   }
    
  };