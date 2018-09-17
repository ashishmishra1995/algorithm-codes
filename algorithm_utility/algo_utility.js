/*****************************************************************************************
 * Execution       :    1.  default mode
 *  
 * Purpose         :   Learning Algorithm Codes
 * 
 * @description
 * @author          :   BridgeLabz <ASHISH KUMAR MISHRA>
 * @file            :   algo_utility.js
 * @overview        :   anagram.js, anagramPrime.js, binary.js, binaryFileSys.js, binaryInt.js, binaryString.js, bubbleSort.js, calender.js, findNumber.js, insertionSort.js, mergeSort.js, monthlyPay.js, newtonSqrt.js, pallindromePrime.js, primeNumber.js, sortNsearch.js, temperature.js, toBinary.js, vendingMachine.js
 * @module          :   utility
 * @version         :   1.0
 * @since           :   20-Aug-2018    
 ******************************************************************************************/

module.exports={
    /************************
     * ANAGRAM DETECTION:
     * @description This code takes two strings from the user and checks whether they are Anagram or not
     * @argument str1 to take first string
     * @argument str2 to take second string
     * @param arr1 array to store each character of the first string after sorting
     * @param arr2 array to store each character of second string after sorting
     *************************/
    anagram: function(str1,str2)
    {
        var arr1=[], arr2=[];
        
        string1=str1.toUpperCase().split(''); //storing each character into an array 
        string2=str2.toUpperCase().split(''); 
        arr1=string1.sort().join('').trim();    //sorting the characters according to ASCII value
        arr2=string2.sort().join('').trim();
        for(var i=0,j=0; i<arr1.length, j<arr2.length; i++,j++) //loop starts
        {
            if(arr1[i]==arr2[j])    //checking whether each element of the character arrays are equal
            {
                console.log(str1+" and "+str2+" are Anagram");
                break;
            }else{
                console.log("No! Both Strings are not Anagram");
                break;
            }
        }//loop ends
    },
    /***************************
     * TO FIND PRIME NUMBERS BETWEEN A GIVEN RANGE:
     * 
     * @description This code takes a range of two numbers from the user and displays all the prime numbers between them.
     * @argument min to set the minimum value of the range
     * @argument max to set the maximum value of the range
     ***************************/
    primeNumber: function(min,max)
    {
        if(min>=0 && max<=1000){    //takes user input range only between 0 and 1000
        var flag,i;
        
        for(i=min; i<max; i++)      //outer for loop starts
        {
            flag=1;
            for(var j=2; j<=i/2; j++)   //inner for loop starts 
            {
                if(i%j===0)
                {
                    flag=0;
                    break;
                }
            }       //inner for loop ends
            if(flag===1)
            {
                console.log(i);
            }
        }       //outer for loop ends
        } else{
            console.log("Enter a number between 0 and 1000");
        }
    },
    /***********************
     * TO FIND THE PALLINDROME PRIME NUMBERS
     * 
     * @description This code displays the pallindromic prime numbers obtained between the user nput range
     * @argument min to set the minimum value of the range
     * @argument max to set the maximujm value of the range
     ***********************/
    pallindromePrime: function(min,max)
    {
        if(min>=0 && max<=1000){
        for(var l=min; l<max; l++)
        {
            var n=l;
            var a=n;
            var m=0;
            /**
             * @description to find out reverse of the number
             * @param m will store the reverse of the number
             * @param n will store the decreased portion of the number
             */
            while(n>0)  
            {
                m=(Math.floor(m*10)+(n%10));
                n=Math.floor(n/10);
            }
            /**
             * @description if the reversed number is equal to the original number, then it is a pallindrome
             */
            if(a==m)        
            {
                var flag,num=m;
                flag=1;
                for(var j=2; j<=num/2; j++)
                {
                    if(num%j===0)
                    {
                        flag=0;
                        break;
                    }
                }
                if(flag===1)
                {
                    console.log(num);
                }
                 
            }
        }
        }else{
            console.log("Enter a number between 0 and 1000");
        }
    },
    /***********************
     * TO FIND THE ANAGRAM PAIRS OF THE PRIME NUMBERS
     * 
     * @description This code will print all the anagram pairs of the prime numbers of the user input range
     * @argument min to set the minimum number of the range
     * @argument max to set the maximum number of the range
     **********************/
    anagramPrime: function(max)
    {
        var arr=[];
        var flag,i;
        
        for(i=0; i<max; i++)
        {
            flag=1;
            for(var j=2; j<=i/2; j++)
            {
                if(i%j===0)
                {
                    flag=0;
                    break;
                }
            }
            if(flag===1)
            {
                arr.push(i);        //pushing all the prime numbers into an array
            }
        }  
        var arr1=[];
        console.log("Anagrams between 0 and "+max+ " are: ");
        for(var i=0; i<arr.length; i++)
        {   
            for(var j=i+1; j<arr.length; j++)
            {
                var a1=''+parseInt(arr[i]);
                var a2=''+parseInt(arr[j]);
                if((((a1.split('')).sort()).join())===(((a2.split('')).sort()).join())) //checking for anagram
                {
                    console.log(a1+" & "+a2);
                    arr1.push(parseInt(a1));        //pushing the anagram pairs into an array
                }
            }
        }
    },
    /***************************
     * BINARY SEARCH
     * 
     * @description This code takes integers input into an array and then asks to search an element in the array using binary search.//#endregion
     * NOTE- For binary search the array has to be sorted.
     * @argument arr to take array input
     * @argument value that takes the value to be searched in the array
     ***************************/
    binaryInt: function(arr,value)
    {
        arr=arr.sort(function(a,b){     
            return a-b;
        });
        console.log("Sorted array: ");
        console.log(arr);
        var first  = 0,
        last   = arr.length - 1,
        middle = Math.floor((last + first)/2);

        while(arr[middle]!= value && first < last)
        {
            if (value < arr[middle])
            {
                last = middle - 1;
            } 
            else if (value > arr[middle])
            {
                first = middle + 1;
            }
            middle = Math.floor((last + first)/2);
        }
        if(arr[middle]!=value)
        {
            console.log("Element not found!!!");
        }else{
            console.log("Number found at "+middle+ "th position");
        }
        
    },
    /***************************
    * BINARY SEARCH
    * 
    * @description This code takes string input into an array and then asks to search an element in the array using binary search.//#endregion
    * NOTE- For binary search the array has to be sorted.
    * @argument arr to take array input
    * @argument string that takes the string to be searched in the array
    ***************************/
    binaryString: function(arr,string)
    {
        if((string>='a' && string<='z') || (string>='A' && string<='Z'))   //checking if the input is string
        {
            arr=arr.sort();     
            console.log("Sorted array: ");
            console.log(arr);
            var first  = 0,
            last   = arr.length - 1,
            middle = Math.floor((last + first)/2);

            while(arr[middle]!= string && first < last)
            {
                if (string < arr[middle])
                {
                    last = middle - 1;
                } 
            else if (string > arr[middle])
            {
                first = middle + 1;
            }
            middle = Math.floor((last + first)/2);
        }
        if(arr[middle]!=value)
        {
            console.log("String not found!!!");
        }else{
            console.log("String found at "+middle+ "th position");
        }
        }else{
            console.log("Enter a String input");
        }
    },
    /**
     * INSERTION SORT:
     * 
     * @description This code takes an array input and sorts using Insertion sort algorithm.
     * @argument arr to take array input from the user 
     */
    insertionSort: function(arr)
    {
        for(var i=1; i<arr.length; i++)
        {
            var key=arr[i];
            var j=i-1;
            while(j>-1 && arr[j]>key)
            {
                arr[j+1]=arr[j];
                j--;
            }
            arr[j+1]=key;
        }
    },
    /**
     * BUBBLE SORT:
     * 
     * @description This code takes an array input from the user and sorts using Bubble Sort algorithm
     * @argument arr to take array input from the user
     */
    bubbleSort: function(arr)
    {
        for(var i=0; i<arr.length-1; i++)
        {
            for(var j=0; j<arr.length-1-i; j++)
            {
                if(arr[j]>arr[j+1])
                {
                    var temp=parseInt(arr[j]);
                    arr[j]=parseInt(arr[j+1]);
                    arr[j+1]=temp;
                }
            }
        }
    },
    /**
     * MERGE SORT:
     * 
     * @description This code sorts an array using Split and sort method and when after splitting, array size becomes 1, all the sorted arrays are merged to get the fully sorted array
     * @argument arr to take array input from the user
     */
    mergeSort: function(arr)
    {
        if(arr.length==1)
        {
            return;
        }
        var mid=parseInt(Math.floor((arr.length)/2));
        var arr1=[];
        arr1.length=mid;
        var arr2=[];
        arr2.length=arr.length-mid;
        var i;
        for(i=0; i<arr1.length; i++)
        {
            arr1[i]=arr[i];
        }
        for(var j=0; j<arr2.length; j++, i++)
        {
            arr2[j]=arr[i];
        }
        this.mergeSort(arr1);   //recursive call to repeat the sorting
        this.mergeSort(arr2);   //recursive call to repeat the sorting
        merger(arr1,arr2,arr);  //function to merge the splitted arrays
        function merger(a,b,c)
        {
            var i=0,j=0,k=0;
            while(i<a.length && j<b.length)
            {
                if(a[i]<b[j])
                {
                    c[k++]=parseInt(a[i++]);
                }
                else{
                    c[k++]=parseInt(b[j++]);
                }
            }
            while(i<a.length)
            {
                c[k++]=parseInt(a[i++]);
            }
            while(j<b.length)
            {
                c[k++]=parseInt(b[j++]);
            }
        }
    },
    /**
     * BINARY SEARCH USING FILE SYSTEM
     * NOTE- Array has to be sorted bor Binary Search
     * @description This code takes input from a file, puts all values into an array and asks the user to search for a value. Searching is done using Binary Search algorithm.
     * @argument arr to store the values of file into an array
     * @argument value to ask the user to search for a value
     */
    binaryFileSys: function(arr,value)
    {
        arr=arr.sort();
        console.log("Sorted array: ");
        console.log(arr);
        var first  = 0,
        last   = arr.length - 1,
        middle = Math.floor((last + first)/2);

        while(arr[middle]!= value && first < last)  //loop starts
        {
            if (value < arr[middle])
            {
                last = middle - 1;
            } 
            else if (value > arr[middle])
            {
                first = middle + 1;
            }
            middle = Math.floor((last + first)/2);
        }       //loop ends
        if(arr[middle]!=value)
        {
            console.log("Element not found!!!");
        }else{
            console.log("Element searched found at "+middle+ "th position");
        }
    },
    /**
     * TEMPERATURE CONVERSION
     * 
     * @description This code converts Farhenite to Celcius and vice-versa using the formula
     * @argument option to take input from user regarding the operation he wants to perform
     */
    temperature: function(read,option)
    {
        switch(option)
        {
            case '1':           //to convert Celcius to Farhenite
                        read.question("Enter temperature in Celcius: ", (temp)=>{
                            var far=(Math.floor(temp*(9/5))+32);
                            console.log("Equivalent Farhenite value= "+far);
                            read.close();
                        })
                        break;
            case '2':       //to convert Farhenite to Celcius
                        read.question("Enter temperature in Farhenite: ", (temp)=>{
                            var c=(Math.floor((temp-32)*(5/9)));
                            console.log("Equivalent Celcius value= "+c);
                            read.close();
                         })
                        break;
        }
    },
    /**
     * NEWTON SQUARE ROOT
     * 
     * @description This code finds the square root of a number using Newton's method
     * @argument c to take number input from the user
     */
    newtonSqrt: function(c)
    {
        var t=c;        
        const epsilon=1e-15;
        while(Math.abs(t-(c/t))>(epsilon*t))    //while loop starts
        {
            t=((c/t)+t)/2;
        }       //while loop ends                   
        console.log("Square root of the number= "+t);
    },
    /**
     * CALENDAR:
     * 
     * @description This code takes input in the form of day, month and year and shows which day it is
     * @argument day to take date as input
     * @argument mon to take month as input
     * @argument yr to take year as input
     */
    calender: function(day,month,year)
    {
        
                            var x,y,m,d;
                            z=(14-month);
                            y=((year-(Math.floor((z)/12))));
                            x=(y+Math.floor(y/4)-Math.floor(y/100)+Math.floor(y/400));
                            m=(month+(12*(Math.floor((14-month)/12)))-2);
                            d=Math.floor(((day+x+((31*m)/12))%7));
                            switch(d)
                            {
                                case 0 :console.log("The day on "+day+"/"+month+"/"+year+" was :-  sunday");
                                break;
                                case 1 :console.log("The day on "+day+"/"+month+"/"+year+" was :- Monday");
                                break;
                                case 2 :console.log("The day on "+day+"/"+month+"/"+year+" was :- Tuesday");
                                break;
                                case 3 :console.log("The day on "+day+"/"+month+"/"+year+" was :- Wednesday");
                                break;
                                case 4 :console.log("The day on "+day+"/"+month+"/"+year+" was :- Thursday");
                                break;
                                case 5:console.log("The day on "+day+"/"+month+"/"+year+" was :-  Friday");
                                break;
                                case 6 :console.log("The day on "+day+"/"+month+"/"+year+" was :- Saturday");
                                break;
                            }
       
    },
    

    /**
     * CONVERSION OF DECIMAL TO BINARY
     * 
     * @description This code converts decimal number to its binary equivalent
     * @argument number to take number input from the user
     */
    toBinary: function(number)
    {
        var a, arr=[];
        var bin="";
        while(number>0)
        {
            a=parseInt(Math.floor(number%2));
            bin=a+bin;
            number=parseInt(Math.floor(number/2));
        }
        console.log("Binary Equivalent= "+bin);
    },
    /**
     * BINARY CONVERSION
     * 
     * @description This code takes number input, converts it into binary and divides the 8-bits binary into two nibbles of 4-bits each and swaps the two parts and convert the resultant binary back to a new decimal value
     * @argument number to take number input from the user
     */
    binary: function(read,number)
    {
        var a, sum=0;
        var arr=[], arr1=[];
        while(number>0)
        {
            a=((number%2));
            arr.unshift(a);
            number=(Math.floor(number/2));
        }
        var t=(Number(arr.length));
        for(var i=0; i<(8-t); i++)
        {
            arr.unshift(0);     //making it a complete 8-bits binary
        }
        str=arr.toString();     //converting array to string
        arr1=[];
        arr1=str.split(',');
        
        var m=parseInt(Math.floor(arr1.length/2));  //dividing the binary array into two nibbles
        var mid1=[], mid2=[];
        mid1.length=m;      //creating an array of mid-length of the original array
        mid2.length=parseInt(arr1.length-m);    //creating an array of mid-length of the original array
        for(var i=0; i<m; i++)  
        {
            mid1.push(arr1[i]);     //pushing half of the elements to mid1
        }
        for(var j=m; j<arr1.length; j++)
        {
            mid2.push(arr1[j]);     //pushing other half elements to mid2
        }
        str1=mid1.join('');     //converting mid1 array to string str1
        str2=mid2.join('');     //converting mid2 array to string str2
        var mid3=[], mid4=[];
        mid3.push(str1);        //pushing str1 to mid3 array 
        console.log("Nibble 1: "+mid3);
        mid4.push(str2);        //pushing str2 to mid4 array
        console.log("Nibble 2: "+mid4);
        for(var c=0,d=0; c<mid3.length, d<mid4.length; c++, d++)       
        {
            /**
             * @description swapping both the mid3 and mid4 elements
             */
            var temp=mid3[c];
            mid3[c]=mid4[d];
            mid4[d]=temp;
        }
        var string=mid3+mid4;   //concatinating mid3 and mid4
        console.log("Binary formed after swapping the nibbles= "+ string);
        array1=string.split('');
        
        
            var count=0;
            for(var i=array1.length-1; i>=0; i--)
            {
                sum=sum+(array1[i]*(Math.pow(2,(count))));
                count++;
            }
            console.log("Decimal Equivalent after swapping the nibbles= "+sum);
            this.isPower(sum);
            read.close();
    },
    power: function(val)
    {
        var a=1;
        for(var i=0; i<val; i++)
        {
            a=a*2;
        }
        return a;
    },
    isPower: function(val)  //function to check whether the number obtained is a power of 2
    {
        var temp=val;
        var count=0;
        if(val%2==0)
        {
            while(val%2==0)
            {
                count++;
                val/=2;
            }
            if(val==1)
            {
                console.log('\nit is a power of 2: 2^ '+count+"= "+temp);
            }
            else{
                console.log("Not a power of 2");
            }
        }else{
            console.log("it is not a power of 2");
        }
    },
    /**
     * VENDING MACHINE:
     * 
     * @description 
     */
    vendingMachine: function(amount)
    {
        var amount,count=0;
        a=1;
        switch(a)
        {
        case 1:  if(amount/1000>=1)
        {
           var n1= Math.floor(amount/1000)
            console.log("The number of  Rs.1000 notes: "+n1)
            amount=amount-(n1*1000);
            count+=n1;
        }
       case 2: if(amount/500>=1)
        {
          var n2= Math.floor (amount/500);
            console.log("The Number of Rs.500 notes : "+n2)
            amount=amount-(n2*500);
            count+=n2;
        }
        case 3: if(amount/100>=1)
        {
            var n3=Math.floor(amount/100);
            console.log("The number of Rs.100 notes : "+n3)
            amount=amount-(n3*100);
            count+=n3;
        }
        case 4:if(amount/50>=1)
        {
            var n4=Math.floor(amount/50);
            console.log("The number of Rs.50 Notes are : "+n4)
            amount=amount-(n4*50);
            count+=n4;
        }
        case 5: if(amount/10>=1)
        {
            var n5=Math.floor(amount/10);
            console.log("The number of Rs.10 Notes are : "+n5)
            amount=amount-(n5*10);
            count+=n5;
        }
        case 6: if (amount/5>=1)
        {
            var n6=Math.floor(amount/5);
            console.log("The number of Rs.5 Notes are : "+n6)
            amount=amount-(n6*5)
            count+=n6;
        }
        case 7: if (amount/2>=1)
        {
            var n7=Math.floor(amount/2)
            console.log("The Number of Rs.2 notes  are : "+n7)
            amount=amount-(n7*2)
            count+=n7;
        }
        case 8: if(amount/1>=1)
        {
            var n8=Math.floor(amount/1)
            console.log("The number of Re.1 notes are : "+ n8)
            count+=n8;
        }
    }
            count=parseInt(count);
           console.log("The minimum number of notes to be returned as change by the Machine is: "+count);
    },

    getCurrentTime: function()
        {
            var a= new Date();
           var start= a.getTime();  //to get current system time
            return start;
        },
    getElapsedTime: function(startTime, stopTime)
    {
        var e= (stopTime-startTime)/1000; //to convert milliseconds to seconds
        return e;
    },

    monthlyPay: function(principal,year,rate)
    {
        var pay,n,r,x;
        n=12*year;
        r=rate/(12*100);
        x=1+r;
        pay=((principal*r)/(1-Math.pow(x,(-n))));
        console.log("Monthly Payment= Rs."+pay);
    },

    findNumber: function(readlinesync,value)
    {
        var arr=[], arr1=[];
        for(var i=0; i<value; i++)
        {
            arr.push(i);
        }
        var first=0, last=arr.length-1;
        while(first <=last)
        {
            var middle= Math.floor((first+last)/2);
            value=readlinesync.question(`\n\nis ${arr[middle]} is the element? \n if yes, press 1, else press 0: `);
            if(value=='0')
            {
                arr1.push(arr[middle]);
                var val2=readlinesync.question(`\n\n if your value >${arr[middle]} \n if yes press 1, else press: `);
                if(val2=='1')
                {
                    first=middle+1;
                }else{
                    last=middle-1;
                }
            }else if(value=='1'){
                console.log("Number Found!!!");
                process.exit();
            }
        }
    }
}