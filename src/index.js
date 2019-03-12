module.exports = function solveSudoku(matrix) {
  var potentialNum=[1,2,3,4,5,6,7,8,9];
   var zeroArr = [];
    

   function solver(){
         for(var i = 0; i < zeroArr.length; i++){
           for(var j = 0; j < potentialNum.length; j++){
             if(checkSquare(zeroArr[i], potentialNum[j])!=false && checkRow(zeroArr[i], potentialNum[j])!=false && checkCol(zeroArr[i], potentialNum[j])!=false){    
              matrix[zeroArr[i][0]][zeroArr[i][1]] = potentialNum[j];
             }
           }
         }
   }
   var finder = function (){
     for(var i = 0; i<matrix.length; i++){
       for(var j = 0; j< matrix[i].length; j++){
         if(matrix[i][j] == 0){
           zeroArr.push([i,j]);
         } 
       }
     }
   }();
  //  console.log(zeroArr[0][1]);
   function checkRow(position,number){
     for(var i = 0; i<matrix.length; i++){
       if(matrix[position[0]][i]==number){
         return false;
       }
     }
   }

   function checkCol(position,number){
     for(var i = 0; i<matrix.length; i++){
       if(matrix[i][position[1]]==number){
         return false;
       }
     }
   }
   function checkSquare(position,number){
     var startRow = position[0]/3;
     var startCol = position[1]/3;
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
         // console.log(matrix[i][j]);
         if(matrix[i][j]==number){
           return false;
         }
       }
     }
   };
   solver();

   return matrix;

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