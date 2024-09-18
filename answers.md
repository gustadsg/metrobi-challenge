
# Answers for the challenge provided by metrobi


### Question-1

> Write a javascript function that finds the duplicate items in any given array.

```javaScript
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

```javaScript
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

### Question-4

> Write an efficient method that tells us whether or not an input string brackets ("{", "}", "(", ")", "[", "]") opened and closed properly. Example: “{[]}” => true, “{(])}” => false, “{([)]}” => false

```javaScript
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

```javaScript
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

```javaScript
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

### Question-7

> Think that you have an unlimited number of carrots, but a limited number of carrot types. Also, you have one bag that can hold a limited weight. Each type of carrot has a weight and a price. Write a function that takes carrotTypes and capacity and return the maximum value the bag can hold. [Python or Javascript]

Example:
carrotTypes = [{kg: 5, price: 100}, {kg: 7, price: 150}, {kg: 3, price: 70}]
capacity = 36 //kg
getMaxValue(carrotTypes, capacity)

```javaScript
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
