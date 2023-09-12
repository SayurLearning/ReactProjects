import { Link } from "react-router-dom"

 const ModeSelection = () => {
  return (
    <>

    <div className="mt-12">
        <p className="flex items-center justify-center pt-20 font-marker text-5xl">Select Mode</p>
        <div className="container border-transparent flex flex-col items-center mt-24 pl-20 py-10 mx-auto lg:py-16 lg:flex-row lg:items-center">
            <div className="w-full lg:w-1/2 ml-10">
                    <div class="flex flex-wrap justify-center">
                        <div class="w-6/12 sm:w-4/12 px-4 mr-40 mb-10">
                            <img src="https://raw.githubusercontent.com/AravindCodesAllDay/images/main/uploads/explore.jpg" alt="explore" class="shadow rounded-full max-w-10/12 h-fit align-middle border-none" />
                        </div>
                    </div>
                    <div className="lg:max-w-lg">
                        <h1 className="text-3xl font-body tracking-wide text-center bg-text-black dark:text-white  lg:text-4xl">
                            I am New Here!
                        </h1>
                    </div>
                    <div className="flex justify-center pl-20 w-full mt-8 bg-transparent ml-5 rounded-full lg:max-w-sm ">
                        <Link to ="/placeselect">
                                <a type="button" className="h-10 px-4 py-2 m-1 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-150 shadow-lg font-body shadow-cyan-500/50 text-white transition-colors duration-200 transform bg-green-600 rounded-full hover:bg-green-400 focus:outline-none focus:bg-green-400">
                                Explore Mode
                                </a>
                        </Link>      
                    </div>
            </div>

            <div className="w-full lg:w-1/2 ml-10">
                    <div class="flex flex-wrap justify-center">
                        <div class="w-6/12 sm:w-4/12 px-4 mr-40 mb-10">
                            <img src="https://raw.githubusercontent.com/AravindCodesAllDay/images/main/uploads/backForMore.jpg" alt="..." class="shadow rounded-full max-w-full h-52 align-middle border-none" />
                        </div>
                    </div>
                    <div className="lg:max-w-lg">
                        <h1 className="text-3xl font-body tracking-wide bg-text-black dark:text-white text-center lg:text-4xl">
                            Back for more!
                        </h1>
                    </div>
                    <div className="flex justify-center pl-20 w-full mt-8 ml-5 bg-transparent rounded-md lg:max-w-sm">
                        <Link to ="/placeselect">
                                    <a type="button" className="h-10 px-4 py-2 m-1 shadow-lg font-body transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-150 text-white transition-colors duration-200 transform bg-green-600 rounded-full hover:bg-green-400 focus:outline-none focus:bg-green-400">
                                    Focus Mode
                                    </a>
                        </Link>        
                    </div>
            </div>
        </div>
    </div>
</>
  )
}
export default ModeSelection;

