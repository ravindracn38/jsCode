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



