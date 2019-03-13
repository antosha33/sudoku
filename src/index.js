module.exports = function solveSudoku(matrix) {

  var row;
  var col;
  if(!finder(matrix)){
    return matrix;
  }
  for(var num = 1; num<=9; num++){
    if(checker(matrix, row, col, num)){
      matrix[row][col] = num;
      if(solveSudoku(matrix)) return matrix;
      matrix[row][col] = 0;
    }
  }
  return false;


  function finder (matrix){
  for(var i = 0; i<matrix.length; i++){
    for(var j = 0; j< matrix[i].length; j++){
      if(matrix[i][j] == 0){
        row = [i];
        col = [j];
        // console.log(row);
        return true;
      } 
    }
  }
  return false;
  }

  function checker(matrix, row, col, num){
  if(checkSquare(matrix, row, col, num)==true && checkRow(matrix, row, col ,num)==true && checkCol(matrix, row, col,num)==true){
    return true;
  }
  return false;
  }


  function checkSquare(matrix, row, col, num){
    var startRow = row/3;
    var startCol = col/3;
    if(startRow <1){
      startRow=0;
    }else if(startRow >=1 && startRow <2){
      startRow=3;
    }else{
      startRow=6;
    };
    if(startCol <1){
      startCol=0;
    }else if(startCol >=1 && startCol <2){
      startCol=3;
    }else{
      startCol=6;
    };    
    for(var i = startRow; i < startRow + 3; i++){
      for(var j = startCol; j< startCol + 3; j++){
        if(matrix[i][j]==num){
          return false;
        }
      }
    }
    return true;
  }


  function checkRow(matrix, row, col ,num){
    for(var i = 0; i < matrix.length; i++){
      // console.log(row);
      if(matrix[row][i]==num){
        return false;
      }
    }
    return true;
  }

  function checkCol(matrix, row, col,num){
    for(var i = 0; i<matrix.length; i++){
      if(matrix[i][col]==num){
        return false;
      }
    }
    return true;
  }

 
};

// solveSudoku([
//   [5, 3, 4, 6, 7, 8, 9, 0, 2],
//   [6, 7, 2, 1, 9, 5, 3, 4, 8],
//   [1, 9, 8, 3, 4, 2, 5, 6, 7],
//   [8, 5, 9, 7, 6, 1, 4, 2, 3],
//   [4, 2, 6, 8, 5, 3, 7, 9, 1],
//   [7, 1, 3, 9, 2, 4, 8, 5, 6],
//   [9, 6, 1, 5, 3, 7, 2, 8, 4],
//   [2, 8, 7, 4, 1, 9, 6, 3, 5],
//   [3, 4, 5, 2, 8, 6, 1, 7, 9]
// ]);