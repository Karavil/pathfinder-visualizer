class Matrix {
   constructor(matrix) {
      this.matrix = matrix;
      this.visited = matrix.map((row) => row.map((data) => data));
      console.log(this.matrix === this.visited);
      this.endPos = null;
      this.solution = null;
      this.stepsTaken = [];
   }

   clear() {
      this.visited = [...this.matrix];
      this.solution = null;
      this.endPos = null;
   }

   dfs(startRowIndex, startColumnIndex, endRowIndex, endColumnIndex) {
      this.endPos = [endRowIndex, endColumnIndex];
      this.dfsHelper(startRowIndex, startColumnIndex, []);
      return { solution: this.solution, steps: this.stepsTaken };
   }

   dfsHelper(i, j, possibleSolution) {
      if (this.solution) return;
      if (i < 0 || i >= this.matrix.length) return;
      if (j < 0 || j >= this.matrix[i].length) return;
      if (this.visited[i][j] === true) return;

      this.visited[i][j] = true;
      possibleSolution.push([i, j]);

      if (i === this.endPos[0] && j === this.endPos[1]) {
         this.solution = possibleSolution;
      } else {
         this.dfsHelper(i + 1, j, possibleSolution);
         this.dfsHelper(i - 1, j, possibleSolution);
         this.dfsHelper(i, j + 1, possibleSolution);
         this.dfsHelper(i, j - 1, possibleSolution);
      }

      return;
   }

   bfs() {}
}

export default Matrix;

// const testMatrix = [
//    [0, 0, 0, 0, 0],
//    [0, 0, 0, 0, 0],
//    [0, 0, 0, 0, 0],
//    [0, 0, 0, 0, 0],
//    [0, 0, 0, 0, 0],
//    [0, 0, 0, 0, 0],
//    [0, 0, 0, 0, 0],
//    [0, 0, 0, 0, 0],
//    [0, 0, 0, 0, 0],
//    [0, 0, 0, 0, 0],
//    [0, 0, 0, 0, 0],
//    [0, 0, 0, 0, 0],
//    [0, 0, 0, 0, 0],
//    [0, 0, 0, 0, 0],
//    [0, 0, 0, 0, 0],
//    [0, 0, 0, 0, 0],
// ];
// const myMatrix = new Matrix(testMatrix);
// console.log(myMatrix.dfs(0, 0, 1, 2));
