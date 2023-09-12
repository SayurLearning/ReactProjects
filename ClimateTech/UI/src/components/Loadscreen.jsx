import { useState } from 'react'
import Collapse from 'react-bootstrap/Collapse';
import Container from 'react-bootstrap/Container';

const Loadscreen = () => {

    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);  

  const showOneDetail = (value) => {
    switch(value) {
      case 1:        
      setOpen1(!open1)
      setOpen2(false)
      setOpen3(false)
        break;
      case 2:
        setOpen1(false)
        setOpen2(!open2)
        setOpen3(false)
        break;
      case 3:
        setOpen1(false)
        setOpen2(false)
        setOpen3(!open3)
        break;
    }
  }

    return (
        <>
         <Container  className='border-3 border-teal-400 rounded-md mr-4 pt-3 place-content-stretch mt-36 h-fit p-2'>
              <div >
                <div className='mb-2 text-2xl p-3 font-sidehead text-center'><h3>How to Get Started</h3></div>                
                  <button class="collapsible" className="h-10 px-4 py-2 m-1 transition min-w-full ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-150 shadow-lg font-sidebody shadow-cyan-500/50 text-white transform bg-teal-600 rounded-full hover:bg-teal-400 focus:outline-none focus:bg-teal-400"
                  onClick={() => showOneDetail(1)}
                  aria-controls="example2"
                  aria-expanded={open1}>  
                    About 
                    </button> 

                    <Collapse in={open1}>
                      <div id="example2">
                        <ul className='list-disc ml-10 font-sidebody text-teal-600'>
                          <li>Climate tech encompasses a wide range of solutions, from renewable energy technologies (solar, wind, and hydropower) to carbon capture and storage, sustainable agriculture, and transportation innovations.</li>
                          <li>Climate tech aims to reduce the emission of greenhouse gases, such as carbon dioxide (CO2), methane (CH4), and nitrous oxide (N2O), which are responsible for global warming and climate change.</li>
                        </ul>
                      </div>
                    </Collapse>

                  <button class="collapsible" className="h-10 px-4 py-2 m-1 transition min-w-full ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-150 shadow-lg font-sidebody shadow-cyan-500/50 text-white transform bg-teal-600 rounded-full hover:bg-teal-400 focus:outline-none focus:bg-teal-400"
                  onClick={() => showOneDetail(2)}
                  aria-controls="example3"
                  aria-expanded={open2}>
                  How it Works?
                  </button>
                  <Collapse in={open2}>
                      <div id="example3">
                        <ul className='list-disc ml-10 font-sidebody text-teal-600'>
                          <li>There are specific parts on the image you can interact with</li>
                          <li>You can either navigate or display details while clicked</li>        
                        </ul>
                      </div>
                    </Collapse>

                  <button class="collapsible" className="h-10 px-4 py-2 m-1 transition min-w-full ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-150 shadow-lg font-sidebody shadow-cyan-500/50 text-white transform bg-teal-600 rounded-full hover:bg-teal-400 focus:outline-none focus:bg-teal-400"
                  onClick={() => showOneDetail(3)}
                  aria-controls="example4"
                  aria-expanded={open3}>
                    Advantages
                  </button>
                  <Collapse in={open3}>
                      <div id="example4">
                        <ul className='list-disc ml-10 font-sidebody text-teal-600'>
                          <li>By reducing waste and reusing items, we can minimize the environmental impact of landfills, pollution, and resource extraction.</li>
                          <li>Recycling often requires less energy than producing items from raw materials, leading to reduced greenhouse gas emissions.</li>
                          <li>Reusing items prolongs their useful life, reducing the need for constant replacements.</li> 
                          <li>Fewer new products and less waste disposal result in lower air and water pollution levels.</li>                       
                        </ul>
                      </div>
                    </Collapse>
                    
              </div>
                </Container> 
        </>
    )
  }
  
  export default Loadscreen;
  