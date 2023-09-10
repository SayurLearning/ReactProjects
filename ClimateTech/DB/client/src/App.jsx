import { useState,useEffect } from 'react'
import './App.css'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Inserter from './components/Inserter';
import Resource from './components/Resource';
import NavBar from './components/NavBar';
import Grid_resource from './components/Grid_resource';
import Grid_main from './components/Grid_main';
import Updater_main from './components/Updater_main';
import Updater_resource from './components/Updater_resource';

function App() {
  const [main_data,setMainData] = useState([])
  const [resource_data,setResourceData] = useState([])
  useEffect(()=>{                     //this function is used to render the screen with new data
    const getTables= async () =>{
      const dataFromMain = await fetchMainTable()
      const dataFromResource = await fetchResourceTable()
      setMainData(dataFromMain)
      setResourceData(dataFromResource)
    }
    getTables()
  },[]) 
  
  const fetchMainTable= async ()=>{
    const res = await fetch('http://localhost:5000/main')
    const data = await res.json()
    return data
  }
  const fetchResourceTable= async ()=>{
    const res = await fetch('http://localhost:5000/resource')
    const data = await res.json()
    return data
  }
  const addDetails_main = async (details) =>{    //function to POST the card details to json
    const res = await fetch('http://localhost:5000/methodsmain',{
      method: 'POST',
      headers: {
        'Content-type' : 'application/json'
      },
      body: JSON.stringify(details)
    })
    const resp = await res.json()
    setMainData([...main_data, resp])
    console.log("Hello");
  }
  const addDetails_resource = async (details) =>{    //function to POST the card details to json
    const res = await fetch('http://localhost:5000/methodsresource',{
      method: 'POST',
      headers: {
        'Content-type' : 'application/json'
      },
      body: JSON.stringify(details)
    })
    const resp = await res.json()
    setResourceData([...resource_data, resp])
    
  }
  const updateMain = async (details,id) =>{    //function to POST the card details to json
    const res = await fetch(`http://localhost:5000/update_main/${id}`,{
      method: 'PUT',
      headers: {
        'Content-type' : 'application/json'
      },
      body: JSON.stringify(details)
    })
    const resp = await res.json()
    setData([...main_data, resp])
  }
  const updateResource = async (details,id) =>{    //function to POST the card details to json
    const res = await fetch(`http://localhost:5000/update_resource/${id}`,{
      method: 'PUT',
      headers: {
        'Content-type' : 'application/json'
      },
      body: JSON.stringify(details)
    })
    const resp = await res.json()
    setData([...resource_data, resp])
  }
  const deleteMain = async (id)=>{    //the method for deleting json data

    await fetch(`http://localhost:5000/delete_main/${id}`,
    {method: 'DELETE'})
    setMainData(main_data.filter((val)=> val.id !==id,
    console.log(id)
    ))
}
const deleteResource = async (id)=>{    //the method for deleting json data

  await fetch(`http://localhost:5000/delete_resource/${id}`,
  {method: 'DELETE'})
  setResourceData(resource_data.filter((val)=> val.id !==id,
  console.log(id)
  ))
}

  return (
    <>
    <Router>
          
          <NavBar/>
          <br></br>
          
          <Routes>

          <Route path='/main' element={<Inserter data={main_data} adder={addDetails_main}/>}/>
          <Route path='/resource' element={<Resource data={resource_data} adder={addDetails_resource}/>}/>
          <Route path='/update_main' element={<Grid_main data={main_data} onDelete={deleteMain}/>}/>
          <Route path='/update_resource' element={<Grid_resource data={resource_data} onDelete={deleteResource}/>}/>
          <Route path='/update_main_page' element={<Updater_main data={main_data} update={updateMain} />}/>
          <Route path='/update_resource_page' element={<Updater_resource data={resource_data} update={updateResource} />}/>
          
          </Routes>
    </Router>
    </>
  )
}

export default App
