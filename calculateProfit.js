

function calculateProfit(xb,cj){
    const finalXb=[]
   const x1= xb.find((arr)=>arr.variable == "x1")
   const x2= xb.find((arr)=>arr.variable == "x2")
   const x3= xb.find((arr)=>arr.variable == "x3")
   if(x1){
    finalXb.push(x1)
   }else{
    finalXb.push({
        variable:"x1",
        value:0
    })
   }
   if(x2){
    finalXb.push(x2)
   }else{
    finalXb.push({
        variable:"x2",
        value:0
    })
   }
   if(x3){
    finalXb.push(x3)
   }else{
    finalXb.push({
        variable:"x3",
        value:0
    })
   }

    let profit= 0
    for (let i = 0; i < finalXb.length; i++) {
        profit = profit + (-finalXb[i].value*cj[i])
        
    }
  console.log(profit);
   return({
    finalXb:finalXb,
    profit: profit
   })
   

}

export default calculateProfit