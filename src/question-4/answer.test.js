import { checkBrackets } from "./answer";

describe("Question 4", () => {
    it("should return true if theres no brackets", () => {
        const input = "no brackets input"
        const expected = true;

        const result = checkBrackets(input);
        
        expect(result).toBe(expected)
    })

    it("should return true if there are no brackets", () => {
        const input = "no brackets input";
        const expected = true;

        const result = checkBrackets(input);
        
        expect(result).toBe(expected);
    });

    it("should return false if brackets are not closed", () => {
        const inputs = [
            "{", 
            "{(", 
            "{]", 
            "{{}}}}", 
            "[", 
            "[[", 
            "(", 
            "(()", 
            "(]", 
        ];

        const results = inputs.map(checkBrackets);
        
        expect(results.every(x => x === false)).toBeTruthy();
    });

    it("should return true if brackets are correctly closed", () => {
        const inputs = [
            "{}", 
            "{()}", 
            "{}[]", 
            "{() => []}",
            "[{()}]", 
            "{[()]}", 
            "[({})]", 
            "{[{({})}()]}"
        ];

        const results = inputs.map(checkBrackets);
        
        expect(results.every(x => x === true)).toBeTruthy();
    });

    it("should handle mixed content with valid brackets", () => {
        const inputs = [
            "function test() { return [1, 2, 3]; }", 
            "(5 + 3) * [2 / {1 + 1}]",
            "const obj = { key: 'value' };",
            "[[1, 2, 3], [4, 5, 6]]"
        ];

        const results = inputs.map(checkBrackets);
        
        expect(results.every(x => x === true)).toBeTruthy();
    });

    it("should return false for incomplete or mismatched brackets in mixed content", () => {
        const inputs = [
            "function test() { return [1, 2, 3];", // missing closing brace
            "(5 + 3) * [2 / {1 + 1]",              // missing closing brackets
            "const obj = { key: 'value';",         // missing closing curly brace
            "[[1, 2, 3], [4, 5, 6]"                // missing closing bracket
        ];

        const results = inputs.map(checkBrackets);
        
        expect(results.every(x => x === false)).toBeTruthy();
    });

    it("should handle edge cases", () => {
        const inputs = [
            "",        // empty string
            "    ",    // whitespace
            "a+b",     // no brackets at all
            "{ }",     // spaces inside brackets
            "{[ ]}"    // spaces inside nested brackets
        ];

        const expectedResults = [true, true, true, true, true];

        const results = inputs.map(checkBrackets);
        
        expect(results).toEqual(expectedResults);
    });
})