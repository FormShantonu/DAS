/**
 * Find square root of any number only integer value
 * time complexity O(log n)
 */

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
const input = 16;
const result = findSquareRoot(input);
console.log(`square root of ${input} is ${result}`);