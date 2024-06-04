import React from 'react'
import { useSnapshot } from 'valtio'
import state from '../../state'


const simplexTable = ({i}) => {
    const snap = useSnapshot(state)
//     console.log(snap.solution[i].keyRow);
    const solution=snap.solution[i]
    const keyRow= solution.keyRow
    const xb = solution.xb
    const cb= solution.cb
    const row1 = solution.SimplexTable[0]
    const row2 = solution.SimplexTable[1]
    const row3 = solution.SimplexTable[2]
    const dj= solution.dj
    // table.map((element)=>{console.log(element.toFixed(4))})
 
  return (
    <div>
        <table className='border border-vdblue  p-2 text-md '>
        {/* title row */}
        <tr className='bg-dblue text-white'>
            {/* <th className='p-2'>variable coefficient</th> */}
            <th className='p-2'>variable</th>
            <th className='p-2'>variable value</th>
            <th className='p-2'>x1</th>
            <th className='p-2'>x2</th>
            
            {snap.numberOfConstraints==3?<th className='p-2'>x3</th>:""}
            <th className='p-2'>s1</th>
            <th className='p-2'>s2</th>
            {snap.numberOfConstraints==3?<th className='p-2'>s3</th>:""}
            <th className='p-2'>p</th>
        </tr>
        <tr className='text-vdblue border'>
                {/* <td className='border'>{cb[0].toFixed(3)}</td> */}
                <td className='border'>{xb[0].variable}</td>
                <td className='border'>{xb[0].value.toFixed(3)}</td>
                <td className='border'>{row1[0].toFixed(3)}</td>
                <td className='border'>{row1[1].toFixed(3)}</td>
                {snap.numberOfConstraints==3?<td className='border'>{row1[2].toFixed(3)}</td>:""}
                <td className='border'>{row1[3].toFixed(3)}</td>
                <td className='border'>{row1[4].toFixed(3)}</td>
                {snap.numberOfConstraints==3?<td className='border'>{row1[5].toFixed(3)}</td>:""}   
                <td className='border'>{row1[6].toFixed(3)}</td>      
        </tr>
        <tr className={`text-vdblue border ${solution.SimplexTable.length>1 ?"":"hidden"}`} >
                {/* <td className='border'>{cb[1].toFixed(3)}</td> */}
                <td className='border'>{xb[1].variable}</td>
                <td className='border'>{xb[1].value.toFixed(3)}</td>
                <td className='border'>{row2[0].toFixed(3)}</td>
                <td className='border'>{row2[1].toFixed(3)}</td>
                {snap.numberOfConstraints==3?<td className='border'>{row2[2].toFixed(3)}</td>:""}
                <td className='border'>{row2[3].toFixed(3)}</td>
                <td className='border'>{row2[4].toFixed(3)}</td>
                {snap.numberOfConstraints==3?<td className='border'>{row2[5].toFixed(3)}</td>:""}
                <td className='border'>{row2[6].toFixed(3)}</td>
        </tr>
        
        {snap.numberOfConstraints==3?<tr className={`text-vdblue border`} >
                   {/* <td className='border'>{cb[2].toFixed(3)}</td> */}
                   <td className='border'>{xb[2].variable}</td>
                <td className='border'>{xb[2].value.toFixed(3)}</td>
                <td className='border'>{row3[0].toFixed(3)}</td>
                <td className='border'>{row3[1].toFixed(3)}</td>
                {snap.numberOfConstraints==3?<td className='border'>{row3[2].toFixed(3)}</td>:""}
                <td className='border'>{row3[3].toFixed(3)}</td>
                <td className='border'>{row3[4].toFixed(3)}</td>
                {snap.numberOfConstraints==3?<td className='border'>{row3[5].toFixed(3)}</td>:""}
                <td className='border'>{row3[6].toFixed(3)}</td>
        </tr>:""}
        <tr className={`text-vdblue border ${solution.SimplexTable.length>2 ?"":"hidden"}`} >
               {/* <td className='border'></td> */}
                <td className='border'></td>
                <td className='border'>cj-zj</td>
                <td className='border'>{dj[0].toFixed(3)}</td>
                <td className='border'>{dj[1].toFixed(3)}</td>
                {snap.numberOfConstraints==3?<td className='border'>{dj[2].toFixed(3)}</td>:""}
                <td className='border'>{dj[3].toFixed(3)}</td>
                <td className='border'>{dj[4].toFixed(3)}</td>
                {snap.numberOfConstraints==3?<td className='border'>{dj[5].toFixed(3)}</td>:""}
                <td className='border'>{dj[6].toFixed(3)}</td>
        </tr>
        


        
    </table>
    {i < snap.solution.length-1?<p>The key row is row {keyRow}</p>:""}
    </div>
  )
}

export default simplexTable