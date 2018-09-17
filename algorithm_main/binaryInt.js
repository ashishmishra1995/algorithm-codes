var readline=require('readline');
var util=require('../algorithm_utility/algo_utility.js');
var read= readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
var arr=[], start=0, stop,result;
function binaryInt()
{
    read.question("Enter size: ", function(size){
        start=util.getCurrentTime();
        arrayIn(size);
    })
}
arrayIn = function (size) {
    
     if (size == 0){
        read.question("Enter number to be searched: ", function(num){
            var a=parseInt(num);
            util.binaryInt(arr,a);
            stop=util.getCurrentTime();
            result=util.getElapsedTime(start,stop);
                console.log("Elapsed Time= "+result +" seconds");
        });
      
    } else {
      
        read.question('Enter a value: ', (value) => {
            
            arr.push(value)
            arrayIn(--size);
        })
      
    } 
  
};
binaryInt();