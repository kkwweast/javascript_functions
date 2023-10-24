//exercise 1 section
console.log("EXERCISE 1:\n=========\n");
function printOdds(count){
    //1. initilization
    //2. Conditional
    //3. incrementor
    if (count > 0) {
      for (let i =1; i <= count; i++) {
        if(i % 2 == 1) {
            console.log(i);
        }
    }
}
 else {  
    for (let i = 0; i > count; i--){
        if(i % 2 == 1) {
            console.log(i);
        }
    }
//to test the funcions,invoke it
printOdds(10);
printOdds(-33);

//exercise 2 section
function checkAge(userName, age ) { 
        const aboveSixteen = 'Congrats ${userName}, you can drive'  ;
        const belowSixteen = 'Sorry ${userName}, but you need to wait until you are 16.';
        if(age < 16) {
            console.log(belowSixteen);
        } else if  (age >= 16 ){  
            console.log(aboveSixteen);
        } else { 
            console.log("Invalid age");
        }}}};

        checkAge("Bilbo", 111);
        checkAge("Ender" , 14);
        checkAge("Ender", "pizza");
        checkAge()
      
        //exercise 3
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
        
        // Example usage:
        pointPosition(0, 2); // Should print "(0, 2) is on the y axis"
        pointPosition(1, 2); // Should print "(1, 2) is in Quadrant 1"
        pointPosition(-6, 18); // Should print "(-6, 18) is in Quadrant 2"
        
                
            ;
             //exercise 4
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
            
            // Example usage:
            console.log(triangleType(1, 2, 2)); // Should print "Isosceles triangle"
            console.log(triangleType(1, 1, 2)); // Should print "Invalid triangle"
            console.log(getTriangleType(2, 2, 2));
            console.log(getTriangleType(3, 4, 5));


          //exercise 5
          function dataPlan(planLimit, day, usage) {
            const daysRemainging = 30 - day;
            const dataRemaning = planLimit - usage;
            const projectedTotalUsage = currAvg * 30;
            const totalUsageDifference = planLimit-projectTotalUsage;

            //plug in the variable into the paragraph
            let output = `${day}days used,${daysRemaining} days remaining/nAverage daily use: ${perfectAvg} GB/day\n`;

            if (usage >= planLimit) {
                output += `You have used ALL of your alloted data for the month. You will be charged $700/GB of extra data used. Please keep using data , we enjoy taking your money\n If you keep up this package, you will owe $$ {projectedTotalUsage * 700} by the end of the month.` 
            }`${day} days used, ${daysRemaining} days remaining
             ${idealUsageRemaing} GB/day.` 
        }
        return output;

        console.log(dataPlan(100, 15, 56));

            
            
            

            

