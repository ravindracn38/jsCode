//Prime Number Checker
function checkPrime(numForCheck) {
    if (numForCheck <= 1) {
            console.log("Please enter a natural number greater than 1");
            return -1;
    }

    if (numForCheck % 1 !== 0) {
            // More concise way to check for integers
            console.log("Please enter a natural number");
            return -1;
    }

    // Optimization: Check only up to the square root of numForCheck
    const limit = Math.sqrt(numForCheck);

    for (let i = 2; i <= limit; i++) {
            if (numForCheck % i === 0) {
                    console.log(
                            numForCheck,
                            "is not a prime number.",
                            i,
                            "is one of its positive divisors!"
                    );
                    return 1;
            }
    }

    console.log(numForCheck, "is a prime number");
    return 0;
}

//

function getAllFactors(numforFactors){
        if (numforFactors % 1 !=0){
                console.log("Please enter an Integer");
                return false
        }
        console.log("The factors of the number is -- ")
        for(i=1;i<=numforFactors/2;i++){
                if (numforFactors%i==0){
                        console.log(i)
                }
        }
        console.log(numforFactors);
}

//

function findGCD(num1, num2){
        if(num1==0){
                return num2;
        }
        if(num2==0){
                return num1;
        }
        if(num1==num2){
                return num1;
        }
        if(num1>num2){
                return findGCD(num1-num2,num2)
        }

        return findGCD(num1,num2-num1)
        
}


