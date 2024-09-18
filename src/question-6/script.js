function zenosParadox() {
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

function startAnimation() {
    toggleButtonAvailability()
    const positions = zenosParadox()
    const tortoise = document.getElementById("tortoise");
    const achilles = document.getElementById("achilles");
    const finalPosition = positions.tortoise.at(-1)

    for(let i = 0; i < positions["tortoise"].length; i++) {
        setTimeout(() => {
            animateCharacter(tortoise, calculatePercentage(positions.tortoise[i], finalPosition));
            animateCharacter(achilles, calculatePercentage(positions.achilles[i], finalPosition));
        }, i*1000)
    }

    setTimeout(() => {
        animateCharacter(tortoise, 0);
        animateCharacter(achilles, 0);
        toggleButtonAvailability()
    }, positions["tortoise"].length*1000)
}

function animateCharacter(element, percentage) {
    element.style.setProperty(`--${element.id}-position`, `${percentage}%`);
}

function calculatePercentage(position, finalPosition) {
    return position/finalPosition * 100
}

function toggleButtonAvailability() {
    const btn = document.getElementById("startAnimation");
    const currState = btn.getAttribute("disabled")

    if(currState) {
        btn.removeAttribute("disabled")
    } else {
        btn.setAttribute("disabled", "true");
    }
}