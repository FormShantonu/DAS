/**
 * Given two sorted arrays arr1 and arr2 of size m and n respectively, 
 * return the median of the two sorted arrays.
 * The overall run time complexity should be O(log (m+n))
 */

/** 
 * Time Complexity: O(M + N). To merge both arrays O(M+N) time is needed
 * Space Complexity: O(1). No extra space is required
 */


/**
 * 
 * @param {*} arr1 
 * @param {*} arr2 
 * @param {*} n 
 * @param {*} m 
 * @returns 
 */



function getMedian(arr1, arr2, n, m)
{
	
	// Current index of input array arr1[]
	let i = 0;
	
	// Current index of input array arr2[]
	let j = 0;
	let count;
	let m1 = -1, m2 = -1;

	// Since there are (n+m) elements,
	// There are following two cases
	// if n+m is odd then the middle
	// index is median i.e. (m+n)/2
	if ((m + n) % 2 == 1)
	{
		for(count = 0;
			count <= (n + m) / 2;
			count++)
		{
			if (i != n && j != m)
			{
				m1 = (arr1[i] > arr2[j]) ?
					arr2[j++] : arr1[i++];
			}
			else if(i < n)
			{
				m1 = arr1[i++];
			}
			
			// For case when j<m,
			else
			{
				m1 = arr2[j++];
			}
		}
		return m1;
	}

	// Median will be average of elements
	// at index ((m+n)/2 - 1) and (m+n)/2
	// in the array obtained after merging
	// arr1 and arr2
	else
	{
		for(count = 0;
			count <= (n + m) / 2;
			count++)
		{
			m2 = m1;
			if (i != n && j != m)
			{
				m1 = (arr1[i] > arr2[j]) ?
					arr2[j++] : arr1[i++];
			}
			else if(i < n)
			{
				m1 = arr1[i++];
			}
			
			// For case when j<m,
			else
			{
				m1 = arr2[j++];
			}
		}
		return (m1 + m2) / 2;
	}
}
	
// Driver code
let arr1 = [9,200];
let arr2 = [5, 8, 10, 20];

let n1 = arr1.length;
let n2 = arr2.length;

// calling the method
console.log("Median = " + getMedian(arr1, arr2, n1, n2));


