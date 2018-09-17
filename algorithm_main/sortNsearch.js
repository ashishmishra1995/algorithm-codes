var readline = require('readline')
var util=require('../algorithm_utility/algo_utility.js');
var read=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
var result1,result2,result3,result4;
function sortNsearch(){
    
    read.question('Enter the size: ', (size) => {
        start=util.getCurrentTime();
        arrayIn(size);
    })

}
var arr = [];
arrayIn = function (size) {
    
        
      if (size == 0){
            util.bubbleSort(arr);
            console.log("Bubble Sorted array is: ");
            console.log(arr);
            stop=util.getCurrentTime();
            result1=util.getElapsedTime(start,stop);
                console.log("Runtime= "+result1 +" seconds");

                console.log("Insertion Sorted array is: ");
                            console.log(arr);
                            stop=util.getCurrentTime();
                            result2=util.getElapsedTime(start,stop);
                            console.log("RunTime= "+result2 +" seconds");

                read.question("Enter number to be searched: ", function(num){
                    util.binaryInt(arr,num);
                    stop=util.getCurrentTime();
                    result3=util.getElapsedTime(start,stop);
                        console.log("Runtime= "+result3 +" seconds");

                        read.question("Enter String to be searched: ", function(str){
                            util.binaryString(arr,str);
                            stop=util.getCurrentTime();
                            result4=util.getElapsedTime(start,stop);
                                console.log("Runtime= "+result4 +" seconds");
                                util.insertionSort(arr);

                                var arr1=[result1,result2,result3,result4];
                                arr1=arr1.sort(function(a,b){
                                return (b-a);
                            });
                            console.log("Runtime of all sorting and searching in descending order is: ")
                            console.log(arr1); 
                        });  
                });  
        } else {
            read.question('Enter input: ', (number) => {
              
            arr.push(number)
            arrayIn(--size);
          });
        
      } 
  };
sortNsearch();