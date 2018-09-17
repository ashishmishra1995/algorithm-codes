var readline=require('readline');
var util=require('../algorithm_utility/algo_utility.js');
var read= readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

function primeNumber()
{
    read.question("Enter the minimum value: ", function(min){
            read.question("Enter the maximum value: ", function(max){
                var a=parseInt(min);
                var b=parseInt(max);
            util.primeNumber(a,b);
            read.close();
        });
    });
        
    
}
primeNumber();