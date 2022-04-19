function robot(instruction) {
  const instructionArray = typeof instruction == 'string' ? instruction.split('') : [];
	const orientations = ['N', 'E', 'S', 'W']; //indice de qual direção ele está [0, 1, 2, 3]
	const initialOrientation = [7, 3];

  let currentDirection = 0;

  const turnRight = () => {
    if(currentDirection === orientations.length - 1) {
      currentDirection = 0;
      return;
    }
    
    currentDirection++;
  }

  const turnLeft = () => {
    if(currentDirection === 0){
      currentDirection = orientations.length - 1;
      return;
    }

    currentDirection--;
  }

  const advanced = () => {
    switch (currentDirection){
      case 0:
        initialOrientation[1]++;
        break;
      case 1:
        initialOrientation[0]++;
        break;
      case 2:
        initialOrientation[1]--;
        break;
      case 3:
        initialOrientation[0]--;
        break;
    }
  }

  const changeDirection = (instruction) => {
    switch (instruction) {
      case 'R':
        turnRight();
        break;
      case 'L':
        turnLeft();
        break;
      case 'A':
        advanced();
        break;
    }
  }

  instructionArray.map(item => changeDirection(item));
  console.log('direction:::', initialOrientation)

}

robot('A')
