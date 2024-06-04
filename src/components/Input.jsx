import React, { useState } from 'react'
import Simplex from '../../simplex'
import state from '../../state'

const Input = (simplexSolver) => {
    const [numberOfConstraints,setNumberOfConstraints] = useState(3)
    const [values,setValues]= useState({
        ox1: 0,
        ox2:"",
        ox3: "",
        c1x1: "",
        c1x2:"",
        c1x3:"",
        b1:"",
        c2x1:"",
        c2x2:"",
        c2x3:"",
        b2:"",
        c3x1:"",
        c3x2:"",
        c3x3:"",
        b3:""
    })
  return (
    <div className='w-full flex justify-center'>
        <form className='w-80 p-4 rounded-md bg-white drop-shadow-lg flex flex-col gap-4 items-center' >
            <div className='flex gap-2 bg-dblue w-fit p-1 rounded-md'>
                <h1 className={`rounded-md p-2 text-black cursor-pointer ${numberOfConstraints==2?"bg-white text-dblue":""}`} onClick={()=>setNumberOfConstraints(2)}>2 Constraints</h1>
                <h1 className={`rounded-md p-2 text-black cursor-pointer ${numberOfConstraints==3?"bg-white text-dblue":""} `} onClick={()=> setNumberOfConstraints(3)}>3 Constraints</h1>
            </div>
            <div className=' w-full flex flex-col  gap-2'>
                <label className='text-sm font-bold'>Coefficients Of Objective function</label>
                <div className='flex gap-2 text-sm' >
                    <input placeholder='x1' name='ox1' className='w-12 p-2 pl-4 border-2 border-dblue rounded-md' value={values.ox1} onChange={(e)=>{setValues({...values,[e.target.name]:e.target.value})}}/>
                    <input placeholder='x2' name='ox2' className='w-12 p-2 pl-4 border-2 border-dblue rounded-md' value={values.ox2} onChange={(e)=>setValues({...values,[e.target.name]:e.target.value})}/>
                    <input placeholder='x3' name='ox3' className={`w-12 p-2 pl-4 border-2 border-dblue rounded-md ${numberOfConstraints==2?"hidden":""}`} value={values.ox3} onChange={(e)=>setValues({...values,[e.target.name]:e.target.value})}/>
                </div>
            </div>
            <div className=' w-full flex flex-col  gap-2'>
                <label className='text-sm font-bold'>Coefficients Of the first constraint</label>
                <div className='flex gap-2 text-sm' >
                    <input placeholder='x1' name='c1x1' className='w-12 p-2 pl-4 border-2 border-dblue rounded-md' value={values.c1x1} onChange={(e)=>{setValues({...values,[e.target.name]:e.target.value})}}/>
                    <input placeholder='x2' name='c1x2' className='w-12 p-2 pl-4 border-2 border-dblue rounded-md' value={values.c1x2} onChange={(e)=>setValues({...values,[e.target.name]:e.target.value})}/>
                    <input placeholder='x3' name='c1x3' className={`w-12 p-2 pl-4 border-2 border-dblue rounded-md ${numberOfConstraints==2?"hidden":""}`} value={values.c1x3} onChange={(e)=>setValues({...values,[e.target.name]:e.target.value})}/>
                    <input placeholder='b' name='b1' className='w-12 p-2 pl-4 border-2 border-dblue rounded-md' value={values.b1} onChange={(e)=>setValues({...values,[e.target.name]:e.target.value})}/>
                </div>
            </div>
            <div className=' w-full flex flex-col  gap-2'>
                <label className='text-sm font-bold'>Coefficients Of the second constraint</label>
                <div className='flex gap-2 text-sm' >
                    <input placeholder='x1' name='c2x1' className='w-12 p-2 pl-4 border-2 border-dblue rounded-md' value={values.c2x1} onChange={(e)=>{setValues({...values,[e.target.name]:e.target.value})}}/>
                    <input placeholder='x2' name='c2x2' className='w-12 p-2 pl-4 border-2 border-dblue rounded-md' value={values.c2x2} onChange={(e)=>setValues({...values,[e.target.name]:e.target.value})}/>
                    <input placeholder='x3' name='c2x3' className={`w-12 p-2 pl-4 border-2 border-dblue rounded-md ${numberOfConstraints==2?"hidden":""}`} value={values.c2x3} onChange={(e)=>setValues({...values,[e.target.name]:e.target.value})}/>
                    <input placeholder='b' name='b2' className='w-12 p-2 pl-4 border-2 border-dblue rounded-md' value={values.b2} onChange={(e)=>setValues({...values,[e.target.name]:e.target.value})}/>
                </div>
            </div>
            <div className={`w-full flex flex-col  gap-2 ${numberOfConstraints==2?"hidden":""}`}>
                <label className='text-sm font-bold'>Coefficients Of the third constraint</label>
                <div className='flex gap-2 text-sm' >
                    <input placeholder='x1' name='c3x1' className='w-12 p-2 pl-4 border-2 border-dblue rounded-md' value={values.c3x1} onChange={(e)=>{setValues({...values,[e.target.name]:e.target.value})}}/>
                    <input placeholder='x2' name='c3x2' className='w-12 p-2 pl-4 border-2 border-dblue rounded-md' value={values.c3x2} onChange={(e)=>setValues({...values,[e.target.name]:e.target.value})}/>
                    <input placeholder='x3' name='c3x3' className='w-12 p-2 pl-4 border-2 border-dblue rounded-md' value={values.c3x3} onChange={(e)=>setValues({...values,[e.target.name]:e.target.value})}/>
                    <input placeholder='b' name='b3' className='w-12 p-2 pl-4 border-2 border-dblue rounded-md' value={values.b3} onChange={(e)=>setValues({...values,[e.target.name]:e.target.value})}/>
                </div>
            </div>
            <button className='border border-dblue text-dblue px-4 py-1.5 rounded-md' onClick={(e)=>{
                    e.preventDefault()
                    // console.log(values);
                  const solution=  Simplex(values,numberOfConstraints)
                  console.log(solution);
                    state.solution=solution
            }}  >Solve</button>
        </form>
    </div>
  )
}

export default Input