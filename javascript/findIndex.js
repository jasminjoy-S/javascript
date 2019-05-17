// forEach ASYNC function or callback function

function forEach(arr, callback){
	for (var i = 0; i< arr.length; i++){
    	callback(arr[i]);
	}
}

var arr = [1,2,3,4];

forEach(arr, function(num){
	return console.log(num * 2);
});



// findIndex ASYNC function or callback function

function findIndex(arr, callback) {
    for(i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) {
            return i;
        } // end of callback function
    } // end of for
    return -1;
} //end of findIndex

var arr = [1, 2, 3, 4];

findIndex(arr, function(num, index, arr) {
    return num === 3;
});
