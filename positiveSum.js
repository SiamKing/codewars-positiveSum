function positiveSum(arr) {
  return arr.reduce((tot, val) => val > 0 ? tot + val : tot, 0)  
}
