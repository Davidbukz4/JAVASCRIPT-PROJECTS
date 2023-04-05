// Bubble sort in ascending order
function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

// Insertion sort in ascending order
function insertionSort(arr) {
    for (let i = 1; i < arr.length - 1; i++) {
        let key = arr[i]; // sorted list
        let j = i - 1;
        for (; j >= 0 && key < arr[j]; j--) {
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = key;
    }
    return arr;
}

// Selection sort in ascending order
function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let minPos = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minPos]) {
                minPos = j;
            }
        }
        if (minPos !== i) {
            [arr[i], arr[minPos]] = [arr[minPos], arr[i]]
        }
    }
    return arr;
}


// QUICK SORT ALGORITHM
function quickSort(arr, low, high) {
    if (low < high) {
        let pivotIdx = partition(arr, low, high);
        quickSort(arr, low, pivotIdx - 1);
        quickSort(arr, pivotIdx + 1, high);
    }
}

function partition(arr, low, high) {
    let pivotElement = arr[high];
    let i = low;

    for (let j = low; j < high; j++) {
        if (arr[j] < pivotElement) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            i++;
        }
    }
    [arr[i], arr[high]] = [arr[high], arr[i]];
    return i;
}
let arr = [64, 34, 25, 12, 22, 11, 90];
quickSort(arr, 0, arr.length - 1);
console.log(arr);


// MERGE SORT
function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    let mid = Math.floor(arr.length / 2);
    let leftArr = arr.slice(0, mid);
    let rightArr = arr.slice(mid);

    let l = mergeSort(leftArr);
    let r = mergeSort(rightArr);

    return merge(l, r);
}

function merge(left, right) {
    let sortedArr = [];

    while (left.length && right.length) {
        if (left[0] < right[0]) {
            sortedArr.push(left.shift());
        } else {
            sortedArr.push(right.shift());
        }
    }

    while (left.length) {
        sortedArr.push(left.shift());
    }

    while (right.length) {
        sortedArr.push(right.shift());
    }
    return sortedArr;
}

// let arr = [64, 34, 25, 12, 22, 11, 90];
// let res = mergeSort(arr);
// console.log(res);