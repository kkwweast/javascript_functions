
// Exercise 1
console.log("EXERCISE 1:\n=========\n");
function printOdds(count) {
    if (count > 0) {
        for (let i = 1; i <= count; i++) {
            if (i % 2 === 1) {
                console.log(i);
            }
        }
    } else {
        for (let i = -1; i >= count; i -= 2) {
            console.log(i);
        }
    }
}
printOdds(10);
printOdds(-33);

// Exercise 2
function checkAge(userName, age) {
    const aboveSixteen = `Congrats ${userName}, you can drive`;
    const belowSixteen = `Sorry ${userName}, but you need to wait until you are 16.`;
    if (!userName) {
        console.log('Please provide a valid username');
    } else {
        if (age < 16) {
            console.log(belowSixteen);
        } else if (age >= 16) {
            console.log(aboveSixteen);
        } else {
            console.log("Invalid age");
        }
    }
}

checkAge("Bilbo", 111);
checkAge("Ender", 14);
checkAge("Ender", "pizza");
checkAge("Frodo", 20);

// Exercise 3
function pointPosition(x, y) {
    if (x === 0 && y === 0) {
        console.log("The point is at the origin.");
    } else if (x === 0) {
        console.log(`(${x}, ${y}) is on the y axis`);
    } else if (y === 0) {
        console.log(`(${x}, ${y}) is on the x axis`);
    } else if (x > 0 && y > 0) {
        console.log(`(${x}, ${y}) is in Quadrant 1`);
    } else if (x < 0 && y > 0) {
        console.log(`(${x}, ${y}) is in Quadrant 2`);
    } else if (x < 0 && y < 0) {
        console.log(`(${x}, ${y}) is in Quadrant 3`);
    } else {
        console.log(`(${x}, ${y}) is in Quadrant 4`);
    }
}

pointPosition(0, 2);
pointPosition(1, 2);
pointPosition(-6, 18);

// Exercise 4
function triangleType(side1, side2, side3) {
    if (side1 + side2 <= side3 || side1 + side3 <= side2 || side2 + side3 <= side1) {
        return "Invalid triangle";
    } else if (side1 === side2 && side2 === side3) {
        return "Equilateral triangle";
    } else if (side1 === side2 || side1 === side3 || side2 === side3) {
        return "Isosceles triangle";
    } else {
        return "Scalene triangle";
    }
}

console.log(triangleType(1, 2, 2));
console.log(triangleType(1, 1, 2));
console.log(triangleType(2, 2, 2));
console.log(triangleType(3, 4, 5));

// Exercise 5
function dataPlan(planLimit, day, usage) {
    const daysRemaining = 30 - day;
    const dataRemaining = planLimit - usage;

    let output = `${day} days used, ${daysRemaining} days remaining\n`;

    if (usage >= planLimit) {
        output += `You have used ALL of your allotted data for the month. You will be charged $700/GB of extra data used. Please keep using data, we enjoy taking your money. If you keep up this package, you will owe $${(usage - planLimit) * 700} by the end of the month.`;
    } else {
        output += `${dataRemaining} GB/day.`;
    }
    return output;
}

console.log(dataPlan(100, 15, 56));

            
            
            

            

