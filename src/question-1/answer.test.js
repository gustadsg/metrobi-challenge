import { findDuplicateItems1, findDuplicateItems2 } from "./answer"

describe("Question 1 - v1", () => {
    it("should return empty array if array is empty", () => {
        const result = findDuplicateItems1([]);

        expect(result).toEqual([])
    })

    it("should return an empty array if theres no duplicate", () => {
        const data = [1,2]

        const result = findDuplicateItems1(data)

        expect(result).toEqual([])
    })

    it("should return the existent duplicate items", () => {
        const data = [1,1,2,2,3,4]

        const result = findDuplicateItems1(data)

        expect(result).toContain(1)
        expect(result).toContain(2)
        expect(result).not.toContain(3)
        expect(result).not.toContain(3)
    })

    it("should return a list with all replicas", () => {
        const data = [1,1,1,2,2,3]

        const result = findDuplicateItems1(data)

        expect(result.filter(x => x === 1).length).toBe(2)
        expect(result.filter(x => x === 2).length).toBe(1)
        expect(result.filter(x => x === 3).length).toBe(0)
    })
})


describe("Question 1 - v2", () => {
    it("should return empty array if array is empty", () => {
        const result = findDuplicateItems2([]);

        expect(result).toEqual([])
    })

    it("should return an empty array if theres no duplicate", () => {
        const data = [1,2]

        const result = findDuplicateItems2(data)

        expect(result).toEqual([])
    })

    it("should return the existent duplicate items", () => {
        const data = [1,1,2,2,3,4]

        const result = findDuplicateItems2(data)

        expect(result).toContain(1)
        expect(result).toContain(2)
        expect(result).not.toContain(3)
        expect(result).not.toContain(3)
    })

    it("should return a list with unique values", () => {
        const data = [1,1,1,2,2,3]
    
        const result = findDuplicateItems2(data)
    
        expect(result.filter(x => x === 1).length).toBe(1)
        expect(result.filter(x => x === 2).length).toBe(1)
        expect(result.filter(x => x === 3).length).toBe(0)
    })

})





