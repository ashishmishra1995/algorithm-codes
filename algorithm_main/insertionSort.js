var readline = require('readline')
var util=require('../algorithm_utility/algo_utility.js');
var read=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
function insertionSort(){
    
    read.question('Enter the size: ', (size) => {
        start=util.getCurrentTime();
        arrayIn(size);
    })

}
var arr = [];
arrayIn = function (size) {
    
    
      if (size == 0){
            util.insertionSort(arr);
            console.log("Sorted array is: ");
            console.log(arr);
            stop=util.getCurrentTime();
            result=util.getElapsedTime(start,stop);
                console.log("Elapsed Time= "+result +" seconds");
        } else {
            read.question('Enter a string: ', (string) => {
              
            arr.push(string)
            arrayIn(--size);
          });
        
      } 
  };
insertionSort();