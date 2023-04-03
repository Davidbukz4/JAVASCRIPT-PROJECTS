// Bubble sort in ascending order
function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // swaps element
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }       
    }
    return arr;
}

// Insertion sort in ascending order
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        temp = arr[i]; // beginning of unsorted list
        let j = i - 1; // beginning of sorted list
        while (j >= 0 && arr[j] > temp) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = temp;
    }
    return arr;
}

// Selection sort in ascending order
function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let minIdx = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIdx]) {
                minIdx = j;
            }
        }
        if (minIdx != i) {
            [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
        }
    }
    return arr;
}


let arr = [64, 34, 25, 12, 22, 11, 90];
console.log(selectionSort(arr));