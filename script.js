//exercise 1 section
//defined the function
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
        const caresian = (x, y) => {
            if (x == 0 && y == 0){
                console.log("Origin Point");
            } else if  (y == 0) {
                console.log("Y-Axis");
            }else if  (x == 0) {
                console.log ("Y-Axis");
            } else  if (x > 0) { 
                if (y > 0) {
                    console.log("Quadrant 1");
                } else { 
                   console.log("Quadrant 4");
                } else { 
                    console.log("Quadrant 3");
                }
            } };
             //exercise 4
            const getTriangleType = (a, b, c) => {
                console.log(a, b, c);
                if (a + b <= c  || a + c <= b || b + a <= c){
                   return "Invalide Triangle" ;
                } else if (a == b && a == c) {
                    return "Equalatural";
                } else {  (a != b  && a != c && b != c) {
                    return "Scalene";
                } else {  
                    return "Isoceles ";
              
                }}}
               
              console.log (getTriangleType(1, 2, 2));
               console.log(getTriangleType(1, 1, 2));
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

            
            
            

            

