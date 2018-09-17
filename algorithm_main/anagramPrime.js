var readline=require('readline');
var util=require('../algorithm_utility/algo_utility.js');
var read= readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

function anagramPrime()
{
    
        read.question("Enter the maximum value: ", function(max){
            util.anagramPrime(max);
            read.close();
        });
    
}
anagramPrime();