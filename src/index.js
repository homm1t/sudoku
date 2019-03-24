module.exports = function solveSudoku(matrix) {
  // your solution
  //valid data
    const valid = (x,y) => { //create const
        var m = []; // create array
        for(var i=0; i<3; i++) { // for element
          for(var j=0; j<3; j++) { // 
            m.push(matrix[x][i*3+j]) //  push element into matrix
            m.push(matrix[i*3+j][y]) //
            m.push(matrix[3*Math.floor(x/3)+i][3*Math.floor(y/3)+j]) 
          }
        }
        return [1,2,3,4,5,6,7,8,9].filter(e => m.indexOf(e) == -1) 
      }
      // record data
      const record = (x,y) => {
        if(y == 9) {
          return matrix
        } else if (!matrix[x][y]) {
          const correct = valid(x,y).some(i => {
            matrix[x][y] = i;
            return record((x+1)%9,y+(x==9?1:0))
          })
          if (correct)
            return matrix;
          matrix[x][y] = 0;
        } else {
          return record((x+1)%9,y+(x==8?1:0))
        }
      }

      return record(0,0)
}