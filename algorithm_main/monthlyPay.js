var readline = require('readline')
var util=require('../algorithm_utility/algo_utility.js');
var read=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

function monthlyPay()
{
    read.question("Enter the principal amount: ", (principal)=>{
        read.question("enter the number of years:  ", (year)=>{
            read.question("Enter the rate: ", (rate)=>{
                util.monthlyPay(principal,year,rate);
                read.close();
            })
        })
    })
}
monthlyPay();