let analysisType = "sum";

function sumNumbers(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum;
}

function averageNumbers(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum / arr.length;
}

function analyzeNumbers(analysisType, numbers) {
    if (analysisType === "sum") {
        return sumNumbers(numbers);
    } else if (analysisType === "average") {
        return averageNumbers(numbers);
    }
}

console.log(analyzeNumbers("sum", [1, 2, 3, 4]));
console.log(analyzeNumbers("average", [1, 2, 3, 4]));