import findKeyRow from "./findKeyRow"
import findKeyColumn from "./findKeyColumn"
import createNewSimplexTable from "./createNewTable"
import calculateDj from "./calculateDj"
import calculateProfit from "./calculateProfit"
function Simplex (values,numberOfconstraints){
    var ox1=0
    var ox2=0
    var ox3=0
    var c1x1=0
    var c1x2=0
    var c1x3=0
    var b1=0
    var c2x1=0
    var c2x2=0
    var c2x3=0
    var b2=0
    var c3x1=0
    var c3x2=0
    var c3x3=0
    var b3=0
   
    if(values){
        // the coefficient of the objective function are negated
        // note: we used ox1 to represent "x1 value of the objective function or directly read as objective x1"
         ox1= -values.ox1
         ox2 = -values.ox2
         ox3= -values.ox3
         c1x1= values.c1x1
         c1x2= values.c1x2
         c1x3= values.c1x3
         b1= values.b1
         c2x1= values.c2x1
         c2x2= values.c2x2
         c2x3= values.c2x3
         b2= values.b2
         c3x1= values.c3x1
         c3x2= values.c3x2
         c3x3= values.c3x3
         b3= values.b3
        //  console.log(values);
    }
    
// limitations,
// limited to less than constraints alone
// maximum of 3 decision variables
// number of constraints should be equal to the number of decision variables


// objective function
var Z ={x1:Number(ox1),x2:Number(ox2),x3:Number(ox3)}

// constraints
var C1 ={x1:Number(c1x1),x2:Number(c1x2),x3:Number(c1x3),s:Number(b1)}
var C2 ={x1:Number(c2x1),x2:Number(c2x2),x3:Number(c2x3),s:Number(b2)}
var C3 ={x1:Number(c3x1),x2:Number(c3x2),x3:Number(c3x3),s:Number(b3)}

// standard form
var SF= {...Z,s1:Number(0),s2:Number(0),s3:Number(0)}
// C1.s>0 & C2.s>0 & C3.s>=0
if(values){
   
    var cj =[SF.x1,SF.x2,SF.x3,0,0,0,1]

    // basic variable coefficient
    var cb =[0,0,0]

    // basic variable value
     var x =[
        {variable:"s1", value:C1.s},
        {variable:"s2",value:C2.s},
        {variable:"s3",value:C3.s}
        
    ]
     var SimplexTable = [
        [C1.x1,C1.x2,C1.x3,1,0,0,0],
        [C2.x1,C2.x2,C2.x3,0,1,0,0],
        [C3.x1,C3.x2,C3.x3,0,0,0,0]
     ]
     
    //  dj represents cz-zj
   var dj= calculateDj(SimplexTable,cb,cj).dj
   var keyColumn = findKeyColumn(dj)
   var keyRow= findKeyRow(keyColumn,x,SimplexTable)
//    first iteration
    var iterationNumber = 1
   var first = createNewSimplexTable(keyRow,keyColumn,SimplexTable,x,cb,cj,iterationNumber,numberOfconstraints)
   var firstSimplexTable = first.newSimplexTable
   var firstXb =  first.newXb
   var firstCb = first.newCb
   var firstDj = calculateDj(firstSimplexTable,firstCb,cj).dj
//    checking for optimality, it calculates cj-zj and checks if its optimal
    if(calculateDj(firstSimplexTable,firstCb,cj).optimal== true){

        var finalXb=calculateProfit(firstXb,cj).finalXb
         var profit = calculateProfit(firstXb,cj).profit
        return([
            {xb: x, profit: profit, dj: dj, SimplexTable:SimplexTable, cb: cb},
            {xb: firstXb, profit: profit, dj: firstDj, SimplexTable: firstSimplexTable, cb: firstCb}
        ])

    }else{
                        var firstKeyColumn = findKeyColumn(firstDj)
                        var firstKeyRow = findKeyRow(firstKeyColumn,firstXb,firstSimplexTable)
                        // console.log(cb);
                        // second iteration
                        iterationNumber = 2
                        var second = createNewSimplexTable(firstKeyRow,firstKeyColumn,firstSimplexTable,firstXb,firstCb,cj,iterationNumber,numberOfconstraints)
                        var secondSimplexTable = second.newSimplexTable
                        var secondXb =  second.newXb
                        var secondCb = second.newCb
                            var secondDj = calculateDj(secondSimplexTable,secondCb,cj).dj;

                            // checking for optimality
                            if(calculateDj(secondSimplexTable,secondCb,cj).optimal == true){
                                  
                                var finalXb=calculateProfit(secondXb,cj).finalXb
                                var profit = calculateProfit(secondXb,cj).profit
            
                                
                                return([
                                    {xb: x, profit: profit, dj: dj, SimplexTable:SimplexTable, cb: cb},
                                    {xb: firstXb, profit: profit, dj: firstDj, SimplexTable: firstSimplexTable, cb: firstCb},
                                    {xb: secondXb, profit: profit, dj: secondDj, SimplexTable: secondSimplexTable, cb: secondCb}
                                ])
                                
                            }else{
                                                var secondKeyColumn = findKeyColumn(secondDj)
                                                var secondKeyRow = findKeyRow(secondKeyColumn,secondXb,secondSimplexTable)
                                                iterationNumber = 3
                                                var third = createNewSimplexTable(secondKeyRow,secondKeyColumn,secondSimplexTable,secondXb,secondCb,cj,iterationNumber,numberOfconstraints)
                                                var thirdSimplexTable = third.newSimplexTable
                                                var thirdXb =  third.newXb
                                                var thirdCb = third.newCb
                                                var thirdDj= calculateDj(thirdSimplexTable,thirdCb,cj).dj

                                                if(calculateDj(thirdSimplexTable,thirdCb,cj).optimal == true){
                                                    
                                                    var finalXb=calculateProfit(thirdXb,cj).finalXb
                                                    var profit = calculateProfit(thirdXb,cj).profit
                                                  
                                                    return([
                                                        {xb: x, profit: profit, dj: dj, SimplexTable:SimplexTable, cb: cb},
                                                        {xb: firstXb, profit: profit, dj: firstDj, SimplexTable: firstSimplexTable, cb: firstCb},
                                                        {xb: secondXb, profit: profit, dj: secondDj, SimplexTable: secondSimplexTable, cb: secondCb},
                                                        {xb: thirdXb, profit: profit, dj: thirdDj, SimplexTable: thirdSimplexTable, cb: thirdCb}

                                                    ])

                                                }  else{
                                                    
                                                    // it is unbounded if it goes beyond three iterations
                                                    console.log("unbounded");
                                                    return([
                                                        {xb: x, profit: profit, dj: dj, SimplexTable:SimplexTable, cb: cb},
                                                        {xb: firstXb, profit: profit, dj: firstDj, SimplexTable: firstSimplexTable, cb: firstCb},
                                                        {xb: secondXb, profit: profit, dj: secondDj, SimplexTable: secondSimplexTable, cb: secondCb},
                                                        {xb: thirdXb, profit: profit, dj: thirdDj, SimplexTable: thirdSimplexTable, cb: thirdCb}
                                                    ])
                                                }
                                              
                            }

    }
                            

     
   
}
}
// console.log(Simplex());

export default Simplex