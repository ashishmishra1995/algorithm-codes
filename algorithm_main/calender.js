var readline = require('readline');
//var util=require('../algorithm_main/test.js')
var util = require('../algorithm_utility/algo_utility.js')
var read = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calender() {
    read.question("Enter the day: ", function (day) {
        read.question("Enter the month: ", function (mon) {
            read.question("Enter the year: ", function (yr) {
                day = parseInt(day);
                mon = parseInt(mon);
                yr = parseInt(yr);
                if (day >= 1 && day < 32 && mon >= 1 && mon < 13) {
                    if (yr % 4 == 0 && yr % 100 != 0 || yr % 400 == 0) {
                        util.calender(day, mon, yr);
                    }
                    else if (day == 29 && mon == 2) {
                        console.log("invalid input");
                    }
                    else if ((mon == 4 || mon == 6 || mon == 9 || mon == 11) && day >= 31) {
                        console.log("invalid input");
                    }
                    else
                        util.calender(day, mon, yr);
                }
                else {
                    console.log("invalid input");
                }

                read.close();
            });

        });
    });


}
calender();