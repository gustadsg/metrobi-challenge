
# Answers for the challenge provided by Metrobi

### Question-1

> Write a javascript function that finds the duplicate items in any given array.

#### File: answer.js

```javascript
// the return can contain duplicates, if the item appears 3+ times
export function findDuplicateItems1(data) {
    const knownItems = new Set()
    const duplicates = []
    data.forEach((item) => {
        if(!knownItems.has(item)) {
            knownItems.add(item)
        } else {
            duplicates.push(item)
        }
    })

    return duplicates
}

// the return has only unique items
export function findDuplicateItems2(data) {
    const knownItems = []
    const duplicates = []

    data.forEach((item) => {
        if(!knownItems.includes(item)) {
            knownItems.push(item)
        } else {
            duplicates.push(item)
        }
    })

    return Array.from(new Set(duplicates))
}
```

### Question-2

> Write an async javascript function that writes every item in any given array with 1, 2,4, 8, … seconds apart. ex: for [“a”,” b, “c, “d”], “a” is printed in 1 sec, “b” is printed in 2 seconds, “c” is printed in 4 seconds, ...

#### File: answer.js

```javascript
export async function printItemsWithExponentialDelay(data) {
    return new Promise((resolve,_) => {
        data.forEach((item, i) => {
            setTimeout(() => {
                console.log(item)
                
                if(i === data.length-1) {
                    resolve()
                }
            }, Math.pow(2,i)*1000)
        })
    })
}
```

### Question-3

> Write the necessary React code for generating the below figure (using flex).

#### File: answer.jsx

```javascript
import React from "react";

import './styles.css'

export default function Layout() {
  return (
    <div className="layout">
      <header className="layout__header">Header</header>

      <div className="layout__main-area">
        <div className="layout__left">
          <section className="layout__hero">Hero</section>
          <nav className="layout__sidebar">sidebar</nav>
        </div>

        <div className="layout__right">
          <main className="layout__main">main</main>
          <aside className="layout__extra">extra</aside>
        </div>
      </div>

      <div className="layout__aside">
        <aside className="layout__related-images">images</aside>
        <aside className="layout__related-posts">posts</aside>
      </div>

      <footer className="layout__footer">Footer</footer>
    </div>
  );
}

```

#### File: styles.css

```css
.layout {
    display: flex;
    flex-direction: column;
    color: white;
    width: 100%;
    text-align: center;
}

.layout__header {
    width: 100%;
    background-color: aqua;
    height: 50px;
}

.layout__hero {
    background-color: plum;
    height: 100px;
}

.layout__sidebar {
    background-color: lightgreen;
    height: 150px;
}

.layout__main-area {
    display: flex;
    font-display: row;
    justify-content: space-between;
    flex-grow: 1;
}

.layout__left {
  flex: 1;
  height: 100%;
}

.layout__right {
  flex: 3;
  height: 100%;
}

.layout__main {
    background-color: orange;
    height: 200px;
}

.layout__extra {
    background-color: grey;
    height: 50px;
}

.layout__aside {
    display: flex;
    font-display: row;
    justify-content: space-between;
}

.layout__related-images {
    background-color: green;
    flex: 3;
    height: 100px;
}

.layout__related-posts {
    background-color: pink;
    flex: 1;
}

.layout__footer {
    width: 100%;
    background-color: orange;
    height: 100px;
}
```

### Question-4

> Write an efficient method that tells us whether or not an input string brackets ("{", "}", "(", ")", "[", "]") opened and closed properly. Example: “{[]}” => true, “{(])}” => false, “{([)]}” => false

#### File: answer.js

```javascript
export function checkBrackets(inputStr) {
    const expectedPairs = []
    const pairOppositeMap = {
        "{": "}",
        "[": "]",
        "(": ")"
    }
    const brackets = Object.entries(pairOppositeMap).flat()

    inputStr.split("").forEach(char => {
        const isABracket = brackets.includes(char);
        if(!isABracket) return;

        if(expectedPairs.length === 0) {
            expectedPairs.push(pairOppositeMap[char])
            return;
        }
        
        const isNextExpectedPair = expectedPairs.at(-1) === char;
        if(isNextExpectedPair) {
            expectedPairs.pop()
            return;
        }

        expectedPairs.push(pairOppositeMap[char])
    });

    return expectedPairs.length === 0
}
```

### Question-5

> A building has 100 floors. One of the floors is the highest floor an egg can be dropped from without breaking. If an egg is dropped from above that floor, it will break. If it is dropped from that floor or below, it will be completely undamaged and you can drop the egg again. Given two eggs, find the highest floor an egg can be dropped from without breaking, with as few drops as possible in the worst-case scenario.

#### File: answer.js

```javascript
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
```

### Question-6

> Write the code that animates “Zeno's Paradox of Achilles and the Tortoise” on an interface(we would like to see the paradox demonstrated).

#### File: answer.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./styles.css">
    <script src="script.js"></script> 
    <title>Document</title>
</head>
<body>
    <div class="container">
        <div class="runner runner--tortoise" id="tortoise">tortoise</div>
        <div class="runner runner--achilles" id="achilles">achilles</div>
    </div>

    <button type="button" onclick="startAnimation()" id="startAnimation">iniciar</button>
</body>
</html>
```

#### File: answer.js

```javascript
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
```

#### File: script.js

```javascript
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
```

#### File: styles.css

```css
:root {
    --achilles-position: 0;
    --tortoise-position: 0;
}

.container {
    display: flex;
    flex-direction: column;
    gap: 2px;
}

.runner {
    width: 100%;
    background-color: black;
    color: white;

    position: relative;
    z-index: 0;
}

.runner::after {
    position: absolute;
    content: "";
    z-index: 1;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 20%;
}

.runner--tortoise::after {
    content: "tortoise";
    background-color: orange;
    width: var(--tortoise-position);
    transition: all 1s linear;
}

.runner--achilles::after {
    content: "achilles";
    background-color: green;
    width: var(--achilles-position);
    transition: all 1s linear;
}
```

### Question-7

> Think that you have an unlimited number of carrots, but a limited number of carrot types. Also, you have one bag that can hold a limited weight. Each type of carrot has a weight and a price. Write a function that takes carrotTypes and capacity and return the maximum value the bag can hold. [Python or Javascript]

Example:
carrotTypes = [{kg: 5, price: 100}, {kg: 7, price: 150}, {kg: 3, price: 70}]
capacity = 36 //kg
getMaxValue(carrotTypes, capacity)

#### File: answer.js

```javascript
// item format: {weight: number, value: number}
// applies dynamic programing bottom up solution
export function unboundedKnapsack(items, totalCapacity) {
    if(items.length < 1){
        return [0, []]
    }

    items = items.sort((a,b) => a.weight - b.weight) // sort needed to ensure dp table integrity

    const numLines = items.length;
    const numCols = totalCapacity + 1;

    const dp = Array(numLines).fill(Array(numCols).fill(0))
    const dpIncludedItems = Array(numLines).fill(Array(numCols).fill([]))

    for(let itemIndex = 0; itemIndex < numLines; itemIndex++) {
        const weight = items[itemIndex].weight
        const value = items[itemIndex].value

        for(let currCapacity = 1; currCapacity < numCols; currCapacity++) {
            let includingItemProfit = 0;
            let excludingItemProfit = 0;
            
            if(itemIndex >= 1) {
                excludingItemProfit = dp[itemIndex - 1][currCapacity]
            }

            if(items[itemIndex].weight <= currCapacity) {
                includingItemProfit = value + dp[itemIndex][currCapacity-weight]
            }

            if(includingItemProfit > excludingItemProfit) { 
                dp[itemIndex][currCapacity] = includingItemProfit;
                dpIncludedItems[itemIndex][currCapacity] = [items[itemIndex], ...dpIncludedItems[itemIndex][currCapacity-weight]]
                continue
            }

            dp[itemIndex][currCapacity] = excludingItemProfit

            if(itemIndex > 1) {
                dpIncludedItems[itemIndex][currCapacity] = dpIncludedItems[itemIndex - 1][currCapacity]
            }
        }
    }

    // console.table(dp)
    
    return [dp[numLines-1][numCols-1],dpIncludedItems[numLines-1][numCols-1]]
}

export function getMaxValue(items, maxCapacity) {
    const [bestValue, sac] = unboundedKnapsack(items.map(serialize), maxCapacity)
    return [bestValue, sac.map(deserialize)]
}

function serialize(item) {
    return {
        weight: item.kg,
        value: item.price
    }
}

function deserialize(item) {
    return {
        kg: item.weight,
        price: item.value
    }
}
```
