import React from 'react';
import config from './app.config';
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Topnavbar from './components/Topnavbar';
import WelcomeMain from './pages/WelcomeMain'; 
import ModeSelection from './pages/ModeSelection';
import  PlaceSelection  from './pages/PlaceSelection';
import Layout from './pages/Layout';


function App() {

    const [data, setData] = useState([]);
    const apiUrl = config[process.env.NODE_ENV].apiUrl
  
  
    const fetchTasks = async () => {
      const res = await fetch(apiUrl)
      const data = await res.json()
      return data
    }
  
    useEffect(() => {
      const getTasks = async () => {
        const tasksFromServer = await fetchTasks()
        setData(tasksFromServer)
      }
      getTasks()
    }, [])


  
  return (
    <>
      <section className="min-h-screen pt-1 dark:text-gray-100 dark:bg-slate-900 duration-100">
          
        <div className=' top-2 z-50 right-2 absolute duration-100 dark:bg-slate-800 bg-gray-100   rounded'>
          
        <Topnavbar/>     
              
        </div>
        
        <Router>
          <Routes>
            <Route path="/" element={<WelcomeMain/>}/>
            <Route path='modeselect' element={< ModeSelection />}/>
            <Route path='placeselect' element={<PlaceSelection />}/>
            {data.map((details) => <Route key={details.id} path={`/${details.name}`} element={<Layout pagedetails={details} />} />)}
          </Routes>
      </Router>
    </section>
</>
  )
}

export default App
