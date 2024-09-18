import { twoEggsNFloors } from "./answer";

function fillFromIndexOneBased(array, index, fill) {
    for(let i = index-1; i < array.length; i++) {
        array[i] = fill
    }
    return array
}

describe("Question 5", () => {
    let floorsArray;
    beforeEach(() => {
        floorsArray = Array(100).fill(false)
    })

    it("Should take one iteration, if first dangerous floor is 14th", () => {
        fillFromIndexOneBased(floorsArray, 14, true)
        const result = twoEggsNFloors(floorsArray)

        expect(result).toBe(14);
    })

    it("Should take three iterations, if first dangerous floor is 15th", () => {
        fillFromIndexOneBased(floorsArray, 15, true)
        const result = twoEggsNFloors(floorsArray)

        expect(result).toBe(3);
    })

    it("Should take three iterations, if first dangerous floor is 15fdsth", () => {
        fillFromIndexOneBased(floorsArray, 100, true)
        const result = twoEggsNFloors(floorsArray)

        expect(result).toBe(12);
    })
})