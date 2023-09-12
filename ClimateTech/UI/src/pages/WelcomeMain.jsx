import { Link } from "react-router-dom"

 const WelcomeMain = () => {
  return (
    <>  
        <main className="flex items-center justify-center h-54  ml-1 flex-col space-y-48 ">
          <div className="text-center">
            <Link  to='/modeselect'>
                <img src="https://raw.githubusercontent.com/AravindCodesAllDay/images/main/uploads/logo.png" className="flex items-center justify-center  h-80 mt-28 " alt="Zemlia Logo"/>
            </Link>
            </div>
        </main>
        <div className="container border-transparent flex flex-col items-center  pl-20  mx-auto pt-9   lg:flex-row lg:items-center">
            <div className="flex flex-col ml-auto ">
                <h2 className="font-body ml-28 text-4xl"><b>Welcome</b></h2>
                <h4 className="font-body ml-44 text-3xl"><b>to</b></h4>
                <h2 className="font-body text-6xl bg-clip-text text-transparent bg-blue-400 dark:bg-gradient-to-r from-pink-500 to-violet-500"><b>Climate-Tech</b></h2>
            </div>
            <div className="mr-96 ml-auto ease-[cubic-bezier(0.95,0.05,0.795,0.035)]" >
            <Link to ="/modeselect">
                <button  className=" h-14 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-150 px-4 py-3.5 text-xl m-1 font-body text-white transform bg-green-600 rounded-full hover:bg-green-400  focus:bg-green-400">
                        Get Started
                    </button>
                    </Link>   
            </div>
            </div>
            <div className="flex flex-col items-center  pl-72 py-10 lg:flex-row lg:items-center">
                <p className="text-2xl font-head ml-96 mt-24" >your guide to a better life ❤️</p>
            </div>
    </>
  )
}

export default WelcomeMain;
