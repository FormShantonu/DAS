/** 
* You are a product manager and currently leading a team to develop a new product.
Unfortunately, the latest version of your product fails the quality check. Since each
version is developed based on the previous version, all the versions after a bad version
are also bad. Suppose you have n version and you want to find out the first bad one,
which causes all the following ones to be bad. Also, talk about the time complexity of
your code.
Test Cases:
Input: [0,0,0,1,1,1,1,1,1]
Output: 3
Explanation: 0 indicates a good version and 1 indicates a bad version. So, the index of
the first 1 is at 3. Thus, the output is 3
* Time complexity O(n log n)
*/

const versionArray = [0,0,1,1,1,1,1];

let start = 1, end = versionArray.length, start_range =0, end_range = 0, mid_number;
while( end > start){
    //traverse the array exponentially for get range
    if(versionArray[start] == 0 ){
        start_range =  start;      
        start = start * 2;
        end_range = start;
        // if(versionArray[range_start]){
        //     range_start = range_start-1
        //     break;
        // }
    }else{        
        binarySearch(start_range, end_range);
        break;
    }
}
function binarySearch(start_range, end_range) {
    mid_number = parseInt(start_range + (end_range - start_range)/2);       
    if(versionArray[mid_number] == 1){
        if(versionArray[mid_number-1] == 0){            
            console.log(`result ${mid_number}`);
        }else{
            end_range = mid_number -1;
            
            binarySearch(start_range, end_range);
        }
    }else{        
        start_range=mid_number+1;     
        binarySearch(start_range, end_range);
    }
    
}

