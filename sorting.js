
// //drill 1
// //What is the resulting list that will be sorted after 3 recursive calls to mergesort?
// 21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40 
// 21, 1, 26, 45, 29, 28, 2, 9, |  16, 49, 39, 27, 43, 34, 46, 40 
// 21, 1, 26, 45, | 29, 28, 2, 9
// 21, 1, | 26, 45
// //What is the resulting list that will be sorted after 16 recursive calls to mergesort?
// 21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40 
// 21, 1, 26, 45, 29, 28, 2, 9, |  16, 49, 39, 27, 43, 34, 46, 40 
// 21, 1, 26, 45, | 29, 28, 2, 9
// 21, 1, | 26, 45
// 21 | 1 | 26 | 45 | 29 | 28 |2 |9 | 16, 49, 39, 27,| 43, 34, 46, 40 
// 21 | 1 | 26 | 45 | 29 | 28 |2 |9 | 16, 49,| 39, 27,| 43, 34, 46, 40 
// 21 | 1 | 26 | 45 | 29 | 28 |2 |9 | 16,| 49,| 39, 27,| 43, 34, 46, 40 
// 21 | 1 | 26 | 45 | 29 | 28 |2 |9 | 16,| 49,| 39,|27,| 43, 34, 46, 40 
// 21 | 1 | 26 | 45 | 29 | 28 |2 |9 | 16,| 49,| 39,|27,| 43, 34,| 46, 40 
// 21 | 1 | 26 | 45 | 29 | 28 |2 |9 | 16,| 49,| 39,|27,| 43,| 34,| 46, 40 
// //What are the first 2 lists to be merged? 
// 1|21
// //Which two lists would be merged on the 7th merge?
// 43|34

// //drill 2
// //The pivot could have been either 14 or 17

// // quicksorting with pivot at end

// 14, 17, 13, 15, 19, 10, 3, 16, 9, 12
// 10, 17, 13, 15, 19, 14, 3, 16, 9, 12
// 10, 3, 13, 15, 19, 14, 17, 16, 9, 12
// 10, 3, 9, 15, 19, 14, 17, 16, 13, 12
// 10, 3, 9, 12, 15, 19, 14, 17, 16, 13,
// 10, 3, 9 | 12 | 15, 19, 14, 17, 16, 13
// 10, 3, 9
// 3, 10, 9
// 3, 9, 10, 12 |
// 15, 19, 14, 17, 16, 13
// 13, 15, 19, 14, 17, 16
// 3, 9, 10, 12 | 13 | 15, 19, 14, 17, 16

// // quicksorting with pivot at start

// 14, 17, 13, 15, 19, 10, 3, 16, 9, 12
// 14, 13, 17, 15, 19, 10, 3, 16, 9, 12
// 14, 13, 10, 15, 19, 17, 3, 16, 9, 12
// 14, 13, 10, 3, 19, 17, 15, 16, 9, 12
// 14, 13, 10, 3, 9, 17, 15, 16, 19, 12
// 14, 13, 10, 3, 9, 12, 15, 16, 19, 17
// 13, 10, 3, 9, 12 | 14 | 15, 16, 19, 17
// 13, 10, 3, 9, 12
// 10, 3, 9, 12, | 13
// 15,| 16, 19, 17
// 10, 3, 9, 12 | 13 | 15,| 16, 19, 17

function qSort(array, start = 0, end = array.length) {
    if (start >= end) {
        return array;
    }
    const middle = partition(array, start, end);
    array = qSort(array, start, middle);
    array = qSort(array, middle + 1, end);
    return array;
}

function partition(array, start, end) {
    const pivot = array[end - 1];
    let j = start;
    for (let i = start; i < end - 1; i++) {
        if (array[i] <= pivot) {
            swap(array, i, j);
            j++;
        }
    }
    swap(array, end-1, j);
    return j;
};

function swap(arr, index1, index2) {
    let temp;
    temp = arr[index1]; 
    arr[index1] = arr[index2];
    arr[index2] = temp;
}

//drill 4

function mSort(array) {
    if (array.length <= 1) {
        return array;
    }
    let middle = Math.floor(array.length/2);
    // call for left
    let left = array.slice(0, middle);
    let right = array.slice(middle, array.length);
    left = mSort(left);
    // call for right
    right = mSort(right);
    return merge(left, right, array);
    // merge arrays
}

function merge(left, right, array) {
    let leftIndex = 0;
    let rightIndex = 0;
    let outputIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            array[outputIndex++] = left[leftIndex++];
        }
        else {
            array[outputIndex++] = right[rightIndex++];
        }
    }

    for (let i = leftIndex; i < left.length; i++) {
        array[outputIndex++] = left[i];
    }

    for (let i = rightIndex; i < right.length; i++) {
        array[outputIndex++] = right[i];
    }
    return array;
};



let array = [89, 30, 25, 32, 72, 70, 51, 42, 25, 24]

console.log(mSort(array));

//drill 5

