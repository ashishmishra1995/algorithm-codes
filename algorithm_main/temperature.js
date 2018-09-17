var readline=require('readline');
var util=require('../algorithm_utility/algo_utility.js');
var read= readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

function temperature()
{
    read.question("Enter 1 to convert Celcius to Farhenite and 2 to convert vice-versa: ", function(option){
            util.temperature(read,option);
    })
}
temperature();