export function zenosParadox() {
    const positions = {
        achilles: [0],
        tortoise: [100]
    }
    
    const numOfIterations = 10;

    const firstTortoisedisplacement = 10;
    const tortoiseVelocityRate = 0.4;

    for(let i=1; i<numOfIterations; i++) {
        positions["achilles"][i] = positions["tortoise"][i-1];
        positions["tortoise"][i] = positions["tortoise"][i-1] + firstTortoisedisplacement*(tortoiseVelocityRate**(i-1));
    }

    return positions
}