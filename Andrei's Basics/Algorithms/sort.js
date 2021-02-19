const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array) {
    const lenght = array.length;
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length; j++) {
            if (array[j] > array[j+1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
            
        }
    }
}

function selectionSort(numbers) {
    const length = numbers.length;
    for (let i = 0; i < length; i++) {
        let min = i;
        let temp = numbers[i];
        for (let j = i + 1; j < length; j++) {
            if (numbers[j] < numbers[min]) {
                min = j;
            }
            
        }
        numbers[i] = numbers[j];
        numbers[min] = temp;
    }
}

bubbleSort(numbers);