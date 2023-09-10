import { useState } from "react";

import { useNavigate } from "react-router-dom";

const Updater_main=({data,update})=>{
    const navigate=useNavigate();

    let unique_location = [];
    let unique_component = [];
    let unique_component_type = [];
    data.map((val)=>{unique_location.push(val.location),unique_component.push(val.component),unique_component_type.push(val.component_type)})
    unique_location=unique_location.filter((item,index) => unique_location.indexOf(item) === index);
    unique_component=unique_component.filter((item,index) => unique_component.indexOf(item) === index);
    unique_component_type=unique_component_type.filter((item,index) => unique_component_type.indexOf(item) === index);

    const sId=JSON.parse(sessionStorage.getItem('update_main')).id;
    const sLocation=JSON.parse(sessionStorage.getItem('update_main'))["location"];
    const sComponent=JSON.parse(sessionStorage.getItem('update_main'))["component"];
    const sComponent_type=JSON.parse(sessionStorage.getItem('update_main'))["component_type"];
    const sRid=JSON.parse(sessionStorage.getItem('update_main'))["rid"];


    const [id,setId]=useState(sId);
    const [location,setLocation]=useState(sLocation);
    const [component,setComponent]=useState(sComponent);
    const [component_type,setComponentType]=useState(sComponent_type);
    const [rid,setRid]=useState(sRid);

    const HandleSubmission=(e)=>{
        e.preventDefault()
        console.log("Submitted");
        update({location,component,component_type,rid},id);
        
        setId("");
        setLocation("");
        setComponent("");
        setComponentType("");
        setRid("");

        navigate("/update_main");
    }


    
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-md">
                <h1 className="text-2xl font-semibold mb-6 text-center">Update Main</h1>
                <form onSubmit={HandleSubmission}>
                    <div className="mb-4">
                        <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                            Location
                        </label>
                        <input 
                        id="loc"
                        type="text" 
                        list="location" 
                        value={location}
                        placeholder="Enter Location" 
                        className="w-full border rounded py-2 px-3 mt-1 focus:outline-none focus:ring focus:border-blue-300"
                        onChange={(e) => setLocation(e.target.value)}
                        required/>
                        <datalist id="location" >

                        {unique_location.map((loc)=>(<option value={loc} >{loc}</option>))}

                        </datalist> 

                    </div>
                    <div className="mb-4">
                        <label htmlFor="component" className="block text-sm font-medium text-gray-700">
                            Component
                        </label>
                        <input 
                        id="comp"
                        type="text" 
                        value={component}
                        list="component" 
                        placeholder="Enter Component" 
                        className="w-full border rounded py-2 px-3 mt-1 focus:outline-none focus:ring focus:border-blue-300"
                        onChange={(e) => setComponent(e.target.value)}
                        required/>
                        <datalist id="component" >

                        {unique_component.map((comp)=>(<option value={comp}  >{comp}</option>))}

                        </datalist> 
                    </div>
                    <div className="mb-4">
                        <label htmlFor="componentType" className="block text-sm font-medium text-gray-700">
                            Component Type
                        </label>
                        <input 
                        id="compt"
                        type="text" 
                        value={component_type}
                        list="componenttype" 
                        placeholder="Enter Component Type" 
                        className="w-full border rounded py-2 px-3 mt-1 focus:outline-none focus:ring focus:border-blue-300"
                        onChange={(e) => setComponentType(e.target.value)}
                        required/>
                        <datalist id="componenttype" >

                        {unique_component_type.map((compt)=>(<option value={compt}  >{compt}</option>))}

                        </datalist> 
                    </div>
                    <div className="mb-4">
                        <label htmlFor="componentType" className="block text-sm font-medium text-gray-700">
                            Reference id
                        </label>
                        <input 
                        id="rid"
                        type="number" 
                        value={rid}
                        list="r_id" 
                        placeholder="Enter Reference id" 
                        className="w-full border rounded py-2 px-3 mt-1 focus:outline-none focus:ring focus:border-blue-300"
                        onChange={(e) => setRid(e.target.value)}
                        required/>
                        <datalist id="r_id" >

                        {unique_component_type.map((rid)=>(<option value={rid}  >{rid}</option>))}

                        </datalist> 
                    </div>
                    <div className="mt-6">
                        <button
                            type="submit"
                            className="w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600"
                        >
                            Update Table
                        </button>
                    </div>
                </form>
            </div>
        </div>
      );
}
export default Updater_main