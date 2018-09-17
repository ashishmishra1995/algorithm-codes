var readline = require('readline')
var util=require('../algorithm_utility/algo_utility.js');
var read=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
function bubbleSort(){
    
    read.question('Enter the size: ', (size) => {
        start=util.getCurrentTime();
        arrayIn(size);
    })

}
var arr = [];
arrayIn = function (size) {
    
    
      if (size == 0){
            util.bubbleSort(arr);
            console.log("Sorted array is: ");
            console.log(arr);
            stop=util.getCurrentTime();
            result=util.getElapsedTime(start,stop);
                console.log("Elapsed Time= "+result +" seconds");
        } else {
            read.question('Enter a number: ', (number) => {
              
            arr.push(number)
            arrayIn(--size);
          });
        
      } 
  };
bubbleSort();