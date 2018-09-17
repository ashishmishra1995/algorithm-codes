var readline=require('readline');
var util=require('../algorithm_utility/algo_utility.js');
var read= readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

function vendingMachine()
{
    read.question("Enter amount: ", function(amt){
            var a=parseInt(amt);
            util.vendingMachine(a);
            read.close();
    })
}
vendingMachine();