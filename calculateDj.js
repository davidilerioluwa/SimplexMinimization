

function calculateDj(SimplexTable,cb,cj){
    const zj=[]
//    calculating zj for each column
for (let j = 1; j <= cj.length; j++) {
  const z = (cb[0]*SimplexTable[0][j-1]) + (cb[1]*SimplexTable[1][j-1]) + (cb[2]*SimplexTable[2][j-1])

  zj.push(z)
}
const dj=[]
// calculating dj for each column j, that is cj-zj
for (let j = 1; j <= cj.length; j++) {
  const d = cj[j-1]-zj[j-1]
  dj.push(d)
}

// to check for all dj<=0, we count how many values of dj are below zero
let count = 0
let optimal = false
for (let j = 1; j <= dj.length; j++) {
    
    if(dj[j-1]>=0){
        count = count +1
    }  
}
console.log(dj);
    console.log(count);
// it is optimal when the total length of the dj is below zero, that is all values of dj are below zero
if(count == dj.length){
    optimal= true
    // console.log(count);
    // console.log(dj);

}
// console.log(dj);
return({
    dj: dj,
    optimal: optimal
})
}

export default calculateDj