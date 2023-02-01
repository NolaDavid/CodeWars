//Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

//  This function uses nested loops to iterate over both arrays and checks if each string in a1 is a substring of any of the strings in a2 using the includes method. If it is, it's added to the res array. Finally, the res array is sorted and returned as the result using the sort method.





const lexOrderSubstring = (arr1, arr2) => {
    let result = [];

    for(let i  = 0; i < arr1.length; i++){
        for(let j = 0; j < arr2.length; j++){
            if(arr2[j].includes(arr1[i])){
                result.push(arr1[i])
            }
        }
    }
return result.sort();
}