var readline=require('readline');
var util=require('../algorithm_utility/algo_utility.js');
var read= readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

function toBinary()
{
    read.question("Enter decimal number: ", function(num){
            var a=parseInt(num);
            util.toBinary(a);
            read.close();
    })
}
toBinary();