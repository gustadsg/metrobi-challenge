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