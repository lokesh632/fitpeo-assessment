import { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import Sidebar from './core/components/Sidebar'
import Dashboard from './core/components/Dashboard'

function App() {

  const [sidebar,setSidebar]=useState(true);
  return (
    <>
    <div className='flex justify-between items-start h-full'>
    <Router>
        <Sidebar isOpen={sidebar} setIsOpen={setSidebar}/>
        <Dashboard isOpen={sidebar} setIsOpen={setSidebar}/>
    </Router>
    </div>
    </>
  )
}

export default App
