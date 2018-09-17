var readline=require('readline');
var util=require('../algorithm_utility/algo_utility.js');
var read= readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
var arr=[];
function binaryString()
{
    read.question("Enter size: ", function(size){
        start=util.getCurrentTime();
        arrayIn(size);
    })
}
arrayIn = function (size) {
    
     if (size == 0){
        read.question("Enter String to be searched: ", function(str){
            util.binaryString(arr,str);
            stop=util.getCurrentTime();
            result=util.getElapsedTime(start,stop);
                console.log("Elapsed Time= "+result +" seconds");
        });
      
    } else {
      
        read.question('Enter a string: ', (str) => {
            
            arr.push(str);
            arrayIn(--size);
        })
      
    } 
  
};

binaryString();