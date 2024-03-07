import { useState } from 'react';
import Task from './components/Task';
import './App.css'


function App() {
  const [count, setCount] = useState(0)
  /*  const handleChange = (type: string, value: string) => {
    console.log(`Change detected: ${type} - ${value}`);
  }; */ 
  return (
    <>
      
      <h1>Vite + React</h1>
      <Task
        
      />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
