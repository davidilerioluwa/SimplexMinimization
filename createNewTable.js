import calculateDj from "./calculateDj"

function createNewSimplexTable (keyRow,keyColumn,SimplexTable,xb,cb,cj,iterationNumber,numberOfConstraints){

    const keyElement = SimplexTable[keyRow-1][keyColumn-1]

    const FullKeyRow = SimplexTable[keyRow-1]
    const optimal = calculateDj(SimplexTable,cb,cj).optimal 

   




    function replaceKeyRow (){
        const  keyRowReplacement  = []

        // to replace the key row with the new row
       for (let j = 1; j <= SimplexTable[0].length; j++) { 
       const newValue=  FullKeyRow[j-1]/keyElement
       keyRowReplacement.push(newValue)
       }
       const newXbvalue = xb[keyRow-1].value/keyElement
       const newCb = cb
       const newCbvalue = cj[keyColumn-1]
       newCb[keyRow-1] = newCbvalue
    
       return({
        keyRowReplacement: keyRowReplacement,
        keyXbvalue : newXbvalue,
        newCb : newCb
       });
    
    }
    const replacedRow =replaceKeyRow()
    const keyXbvalue= replacedRow.keyXbvalue
    const newKeyRow = replacedRow.keyRowReplacement
    const newCb = replacedRow.newCb
    function replaceOtherRows(){
        const newSimplexTable =[]
        const newXb = []
        for (let i = 1; i <= SimplexTable.length; i++) {
            
            if(i == keyRow){
                newSimplexTable.push(newKeyRow)
                newXb.push({
                    variable: "x"+keyColumn,
                    value:keyXbvalue
                })

            }else{
                
                const keyElementInRow = SimplexTable[i-1][keyColumn-1]
                const currentRow = SimplexTable[i-1]
                const newCurrentRow = []
                for (let j = 1; j <= SimplexTable[0].length; j++) {
                    const oldCell = currentRow[j-1]
                    const valueInKeyRow = newKeyRow[j-1]
                    const newCellValue= oldCell - (keyElementInRow*valueInKeyRow)
                    newCurrentRow.push(newCellValue)
                }
                const oldXb = xb[i-1].value
                let newXbvalue = oldXb - (keyElementInRow*keyXbvalue)
               
                 
                        newXb.push({
                            variable:xb[i-1].variable,
                            value: newXbvalue
                        })
                newSimplexTable.push(newCurrentRow)
               
                
            }
            
        }
        return({
            newSimplexTable : newSimplexTable,
            newXb : newXb,
            newCb : newCb
        })
    }

    return(replaceOtherRows())
       
}


export default createNewSimplexTable