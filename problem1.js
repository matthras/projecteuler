// Easy version of the algorithm that most people will most likely do: loop from 0 to the destination number and pick out the relative multiples. Runs in O(n) time.
const sum35 = (belowNumber) => {
    var threes = 0;
    var fives = 0;
    // Since threes and fives will count multiples of 15s twice, it's necessary to calculate the sums of multiples of 15s.
    var fifteens = 0;
    // Loop through each number, and if it's divisible by 3, 5 or 15, increment respective variable by that amount.
    for(var i=1; i<belowNumber; i++) {
        if(i%3===0){
            threes += i
        }
        if(i%5===0){
            fives += i;
        }
        if(i%15===0){
            fifteens += i;
        }
    }
    return threes+fives-fifteens;
}

// Quicker version of the algorithm that doesn't involve a loop and runs in constant time, but requires some knowledge of certain mathematical formulas.
const mathsum35 = (belowNumber) => {
    // Count the number of numbers divisible by 3, 5 and 15
    var nThrees = Math.floor((belowNumber-1)/3);
    var nFives = Math.floor((belowNumber-1)/5);
    var nFifteens = Math.floor((belowNumber-1)/15);
    // Use summation formula. See second equation at https://en.wikipedia.org/wiki/List_of_mathematical_series#Sums_of_powers
    var threes = 3*nThrees*(nThrees+1)/2;
    var fives = 5*nFives*(nFives+1)/2;
    var fifteens = 15*nFifteens*(nFifteens+1)/2;
    return threes + fives - fifteens;
}

console.log(sum35(1000));
console.log(mathsum35(1000));