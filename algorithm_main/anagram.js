var readline=require('readline');
var util=require('../algorithm_utility/algo_utility.js');
var read= readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

function anagram()
{
    read.question("Enter 1st string: ", function(str1){
        read.question("Enter 2nd String: ", function(str2){
            util.anagram(str1,str2);
            read.close();
        })
    })
}
anagram();