function isLeapYear(year: number): boolean {
    if (typeof year !== 'number') {
        throw new Error("Input must be a number");
    }

    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true;
    } else {
        return false;
    }
}

function reverseString(str: string): string {
    if (typeof str !== 'string') {
        throw new Error("Input must be a string");
    }

    return str.split("").reverse().join("");
}
console.log(isLeapYear(2020)); 
console.log(isLeapYear(2021)); 

console.log(reverseString("hello")); 
console.log(reverseString("world")); 
