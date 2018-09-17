var fs = require('fs');
var readline = require('readline')
var util=require('../algorithm_utility/algo_utility.js');
var read=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});


var data = fs.readFileSync('input.txt');
data= ((data.toString()).toLocaleLowerCase()).split(' ');
//console.log(data);

function binaryFileSys()
{
    read.question("Enter the element to be searched: ", function(ele){
        util.binaryFileSys(data,ele);
        read.close();
    });
}
binaryFileSys();