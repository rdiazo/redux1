import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { addCounter, resetCounter, setCounterG, substractCounter } from './store/states/counter.state'

function App() {

  const counter = useSelector(states => states.counter)
  const dispatch = useDispatch()

  const handleReset = () => {
    /*dispatch(setCounterG(0))*/
    dispatch(resetCounter())

  }
  const handleMinus = () => {
    /*dispatch(setCounterG(counter - 1))*/
    dispatch(substractCounter(1))
  }

  const handlePlus = () => {
    /*dispatch(setCounterG(counter + 1))*/
    dispatch(addCounter(1))
  }

  return (
    <div>
      <h1>Redux</h1>
      <h2>{counter}</h2>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleMinus}>-1</button>
      <button onClick={handlePlus}>+1</button>
    </div>
  )
}

export default App
