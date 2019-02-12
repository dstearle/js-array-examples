$(document).ready(function() {
    
    //Basic arrays *******
    
    
    
    //Click event to populate list
    $("#mysubmit1").click
        
    (function(){
        
        //New array that stores numbers to be added to list
        var numbersArray = [ 5, 7, 12];
        
        //Empty variable to store message
        var message1 = "";

        //Foreach loop to itterate through array
        numbersArray.forEach(myFunction);
        
        function myFunction(value) 
        
            {
                //Appends breaks to each value and makes a list
                message1 +=  value + "<br>";
                
            }
        
        //Message to be displayed to user
        $("#message1").html(message1);
        
    });
    
    
    
    
    //Click event to display sum all numbers
    $("#mysubmit2").click
        
    (function(){
        
        //New array that stores numbers to be added to list
        var numbersArray = [ 5, 7, 12];
        
        //Empty variable to store message
        var message2 = "";
        
        //reduce method that gets the total of the array
        var mySum = numbersArray.reduce(function(total, num) { return total + num;}, 0);
        message2 = mySum;
        
        //Message to be displayed to user
        $("#message2").html(message2);
        
    });
    
    
    
    //Click event to display the number positioned first in the array ( first being position 0 )
    $("#mysubmit3").click
        
    (function(){
        
        //New array that stores numbers to be added to list
        var numbersArray = [ 5, 7, 12];
        
        //Empty variable to store message
        var message3 = "";
        
        //Determines position of the number in the array
        var indexZero = numbersArray[0];
        message3 = indexZero;
        
        //Message to be displayed to user
        $("#message3").html(message3);
        
    });
    
    
    
    //Click event to display the number positioned last in the array ( in this case last being "12" at position 2 )
    $("#mysubmit4").click
        
    (function(){
        
        //New array that stores numbers to be added to list
        var numbersArray = [ 5, 7, 12];
        
        //Empty variable to store message
        var message4 = "";
        
        //Finds the last number in the sorted array
        var lastNumber = numbersArray[numbersArray.length - 1];
        message4 = lastNumber;
        
        //Message to be displayed to user
        $("#message4").html(message4);
        
    });
    
    
    
    //Click event to display the index position of a number
    $("#mysubmit5").click
        
    (function(){
        
        //New array that stores numbers to be added to list
        var numbersArray = [ 5, 7, 12];
        
        //Empty variable to store message
        var message5 = "";
        
        //Function that determines the number in the array
        function checkNumber(numbersArray) { return numbersArray >= 5; }
        
        //Determines position of the number in the array
        var indexPosition = numbersArray.findIndex(checkNumber);
        message5 = indexPosition;
        
        //Message to be displayed to user
        $("#message5").html(message5);
        
    });
    
    
    
    //Click event to sort the array from smallest to largest number
    $("#mysubmit6").click
        
    (function(){
        
        //New "scrambled" array that stores numbers to be added to list
        var numbersArray = [ 12, 5, 7];
        
        //Empty variable to store message
        var message6 = "";
        
        //Compare function that sorts the numbers in the array from smallest to largest number
        var sortedArray = numbersArray.sort(function(a, b){return a - b});
        
        //Foreach loop to itterate through array
        sortedArray.forEach(myFunction);
        
        function myFunction(value) 
        
            {
                //Appends breaks to each value and makes a list
                message6 +=  value + "<br>";
                
            }
        
        //Message to be displayed to user
        $("#message6").html(message6);
        
    });
    
    
    
    //More complex arrays *******
    
    
    
    //Click event to display the sum of the two highest numbers
    $("#mysubmit7").click
        
    (function(){
        
        //New "scrambled" array that stores numbers to be added to list
        var numbersArray = [ 12, 5, 7];
        
        //Empty variable to store message
        var message7 = "";
        
        //Compare function that sorts the numbers in the array from smallest to largest number
        var sortedArray = numbersArray.sort(function(a, b){return a - b});
        
        //Finds the last number in the sorted array
        var max = sortedArray[numbersArray.length - 1];
        
        //Finds the second to last number in the sorted array
        var max2 = sortedArray[numbersArray.length - 2];
        
        //Determines the sum of the two highest numbers in the array
        var finalSum = max + max2;
        message7 = finalSum;
        
        //Message to be displayed to user
        $("#message7").html(message7);
        
    });
    
});