import './App.css'
import Simplex from '../simplex'
import SimplexTable from './components/SimplexTable'
import Input from './components/Input'
import state from '../state'
import { useSnapshot } from 'valtio'

function App() {
  const simplexSolver = Simplex()
  const snap = useSnapshot(state)
  return (
    <>
      <Input/>
      <div className='flex flex-col mt-4 gap-4'>
         {snap.solution.length >0?snap.solution.map((iteration,index)=><SimplexTable i={index} />):""}
         {snap.solution.length>0?<p>Therefore, the total profit can be calculated as <span className='text-dblue font-bold'>{snap.solution[snap.solution.length-1].profit}</span></p>:""}
          
      </div>
    </>
  )
}

export default App
