var readline = require('readline')
var util=require('../algorithm_utility/algo_utility.js');
var read=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
function mergeSort(){
    
    read.question('Enter the size: ', (size) => {
        arrayIn(size);
    })

}
var arr = [];
arrayIn = function (size) {
    
    
      if (size == 0){
            util.mergeSort(arr);
            console.log("Sorted array is: ");
            console.log(arr);
        } else {
            read.question('Enter a number: ', (number) => {
              
            arr.push(number)
            arrayIn(--size);
          });
        
      } 
  };
mergeSort();