function robot() {
	const orientations = ['N', 'E', 'S', 'W']
	const initialOrientation = [7, 3];
  const coordinates = { x: 0, y: 0 };

  let currentDirection = 0;
  const instruction = "RAALAL" 


  const changeDirection = (instruction) => {
    if(instruction === 'R') {
        if(currentDirection >= orientations.length){
					currentDirection = 0
        }
        currentDirection++
    } else {
        if(currentDirection === 0){
            currentDirection = 3
        }
        currentDirection--
    }
  }
}

function movement(action) {
  let direction;
  let coordinates;

  switch(action) {
    case 'L':
      directions
  }
}

  N
W   E
  S