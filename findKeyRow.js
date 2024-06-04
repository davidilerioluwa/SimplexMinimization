
function findKeyRow(keyColumn,xb,SimplexTable) {
    const FullKeyColumn = []
    for (let i = 1; i <= SimplexTable.length; i++) {
        FullKeyColumn.push(SimplexTable[i-1][keyColumn-1])
    }
    const ratios = []
    for (let i = 0; i < SimplexTable.length; i++) {
        const ratio = xb[i].value/FullKeyColumn[i]
        if(ratio>0){
            ratios.push(ratio)
        }else{
            ratios.push(0)
        }
    }

// console.log(ratios);
    // it returns the index of the minimum ratio, this gives the key row
    return(findMinimumRatio(ratios))

}


function findMinimumRatio(ratios){

    let minRatio = ratios[0]
    let minRatioIndex = 1

    for (let i = 0; i < ratios.length; i++) {
        if(ratios[i]<minRatio & ratios[i]>0){
            minRatio=ratios[i]
            minRatioIndex = i+1
        }
        
    }
    return(minRatioIndex)
}

export default  findKeyRow