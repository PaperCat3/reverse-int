module.exports = function reverse (n) {
   let ab = Math.abs(n)
   let numberString = String(ab) 
   let numberReverse = ''
   for (let i=numberString.length-1; i>=0; i--) {
      numberReverse += numberString[i]
   }
   return numberReverse
}
