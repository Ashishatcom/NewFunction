
// For Reveresd Array
function Reversed(arr){
     let newArray = [];
   for (var i = arr.length - 1; i >= 0; i--) {
    newArray.push(arr[i]);
}  
return newArray;
 }

 Reversed(arr);
 //  arr = Array
 // Aruguement takes An Array
//////////////// END //////////////////////////////////
 //////////////////////////////////////////////////////

 // For MIN AND MAX VALUE IN ARRAY


 function MinandMax(arr){
     
    const Unique = [...new Set(arr)];
        Unique.sort((a,b) => a-b);
        const min = Unique[0]
        const max = Unique[Unique.length-1]
    return  {Values:{MaxValue:max,Min:min}}
}

MinandMax(arr)

///////  arr = Array  
////////////////  End/////////