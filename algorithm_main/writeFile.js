var fs = require('fs');
let writeStream = fs.createWriteStream('input.txt');
writeStream.write('Hey this is Ashish . You can call me on 8658822547 or 9776401322 or 8456879933 . I am presently at BridgeLabz');
writeStream.on('finish', () => {  
    console.log('wrote all data to file');
});
writeStream.end();  

