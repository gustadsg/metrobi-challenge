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