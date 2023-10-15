//Lets make a functions


function nameOfFunction(waveDifficulty,a, b, c, something) {
    return surferEnergy - waveDifficulty;

}
//invoke, caall use the function
const result = calculateRemaingEnergy(6, 14);
console.log(result);


function substract(a, b) {
    return a - b;
}
const subResult = subtract(10, 4);
console.log(subResult);

function greetPerson(person){
    console.log("Hello," + person + "!");
}
greetPerson("Lady");
greetPerson("Hunter");
greetPerson("Wesley");
checkAge("", 15);

//exercise 3
function cartesian = (x, y) => { 
        if (x == 0 && y == 0) { 
            console.log("Origin Point");
        } else if ( y == 0) { 
            console.log("X-Axis") ;
        }else if(x == 0){ 
            console.log("Y-axis");
        } else if (x > 0){ 
            if(y > 0) { 
                console.log("Quandrant 1");
            }else{ 
                console.log("Quandrant 4");
            }
            } else { 
                if (y > 0){ 
                    console.log("Quandrant 2");
                } else{
                    console.log("Quandrant 3");
                 }
                }
            }
            //exercise 4
            const getTriangleType = (a, b, c) => {
                if (a = b <= c  || a + c <= b || b + a <= c){
                   return "Invalide Triangle" ;
                } else if (a == b && a == c) {
                    return "Equalatural";
                } else {  
                    return "Scalene";
                } else {  
                   return "Isosceles";
                }}
               }
               getTriangleType(1, 2, 2);
               getTriangleType(1, 1, 2);
               getTriangleType(2, 2, 2);
               getTriangleType(3, 4, 5)

               //Exercise 5
               function dataPlan(planLimit, day, usage){
                const daysRemaining = 30 - day;
                const dataRemaing = planLimit - usage;
                const idealUsageRemaining = (dataRemaining / daysRemaining);
                const perfectAvg = planLimit / 30;
                const currAvg = usage / day;
                const projectTotalUsage = currAvg * 30;
                const totalUsageDifference = planLImit-projectedTotalUsage;

                //Plug in the variables into the paragraph
            let output = `${day} days used, ${daysRemaining}days remaining.
            Average daily use: ${perfectAvg} GB/day\n`;
               

               if(totalUsageDifference > 0)  {
                //they are under their limit
                output += `You are UNDER your average daily use(${currAvg})GB/day,
                continuing this low usage, you will exceed your data plan by ${totalUsageDifference}GB of data unused.To maximize your remaining data, use $ {idealUsageRemainig}GB/day`;
               } else if   (totalUsageDifference < 0) {
                //they are over their limit
                output += `You will be removed from our system.Your account has been flagged as a robot. You will be penalized and sentenced accordingly`;
               
                return output;


              
            }
            console.log(dataPlan(100, 15, 45));
            console.log(dtaPlan( 100, 15, 55));
            console.log(dataPlan( 100,15,105));
