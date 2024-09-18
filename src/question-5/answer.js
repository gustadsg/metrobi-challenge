function getStepSize(numberOfFloors) {
    return Math.ceil(Math.abs(-1 + Math.sqrt(1+8*numberOfFloors))/2)
}

export function twoEggsNFloors(arrayOfFloors) {
    let stepSize = getStepSize(arrayOfFloors.length)

    let currentFloor = -1;
    let iterations = 0;
    let deathFloor = arrayOfFloors.length-1;


    while(deathFloor > currentFloor) {
        iterations++;
        
        let nextFloor = Math.min(currentFloor + stepSize, deathFloor);
        
        const eggBreaks = arrayOfFloors[nextFloor]
        
        if(eggBreaks) {
            deathFloor = nextFloor;

            if(stepSize == 1) break;
            stepSize = 1;
        } else {
            currentFloor = nextFloor;
            if(stepSize > 1) stepSize--;
        }

        if(stepSize == 1 && deathFloor == currentFloor + 1) {
            break;
        }

    }

    return iterations;
}