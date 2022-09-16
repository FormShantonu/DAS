/**
 * Given a positive integer num, write a program that returns True if num is a perfect
square else return False. Do not use built-in functions like sqrt. Also, talk about the time
complexity of your code.
Test Cases:
Input: 16
Output: True
Input: 14
Output: False
* Time complexity O(log n)
*/



function perfectSquare(input) {
    let result = findSquareRoot(input);
    if(result * result == input){
        console.log(true);
    }else{
        console.log(false);
    }
}

function findSquareRoot(number) {

    if (number == 0 || number == 1)
    return number;
    
    let start_number = 1, last_number = parseInt(number/2),result;
    let mid_number; 
      
    while (start_number <= last_number) {
        mid_number = parseInt(start_number+(last_number-start_number)/2) ;        
        
        if(mid_number * mid_number == number){
            result = mid_number;
            break;
        }        
        if(mid_number * mid_number <  number){                      
            start_number = mid_number +=1;
            result =  mid_number;
        }else{
            last_number = mid_number-1;            
        }       
    }
    return result; 
}

let input = 225;
perfectSquare(input);

