function matrixProd(matrix1, matrix2) {
    let newMatrix = [];

    for (let row = 0; row < matrix1.length; row++) {
        newMatrix[row] = [];
        for (let col = 0; col < matrix2.length; col++) {
            sum = 0;
            for (let i = 0; i < matrix1.length; i++) {
                sum += matrix1[row][i] * matrix2[i][col];  
            }
            newMatrix[row][col] = sum;
        }
    }
    return newMatrix;
}


function sumOfMats(matrix1, matrix2){
    let newMat = [];

    for(let row = 0; row < matrix1.length; row++){
        newMat[row] = [];
        let sum = 0;
        for(let col = 0; col < matrix1[0].length; col++){
            sum = (matrix1[row][col] + matrix2[row][col]);
            newMat[row][col] = sum;
        }
    }
    return newMat;
}

function sumOfArrays(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        
    }
    return sum;
}

function sumOfRows(mat) {
    let newMat = [];
    for (let row = 0; row < mat.length; row++) {
        newMat.push(sumOfArrays(mat[row]));
        
 }
    return newMat;
}

module.exports = {
    matrixProd,
    sumOfMats,
    sumOfArrays,
    sumOfRows
}