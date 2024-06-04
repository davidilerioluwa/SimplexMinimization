

function findKeyColumn (dj){
 let comp = 0
 let keyColumn = 0
for (let j = 0; j < dj.length; j++) {
    const element = dj[j];
    if(element< comp){
        comp = element
        keyColumn = j
    } 
}
return(keyColumn+1)
}

export default findKeyColumn