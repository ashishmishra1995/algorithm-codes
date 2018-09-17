var readline=require('readline');
var util=require('../algorithm_utility/algo_utility.js');
var read= readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

function newtonSqrt()
{
    read.question("Enter number: ", function(num){
            var a=parseInt(num);
            util.newtonSqrt(a);
            read.close();
    })
}
newtonSqrt();