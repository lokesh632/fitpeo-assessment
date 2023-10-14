
const DashNavbar = ({
    isOpen,
    setIsOpen
}) => {
  return (
    <nav className="py-2.5 dark:bg-gray-100 mb-8">
        <div className="flex flex-wrap justify-between items-center">
            <div className="flex justify-between items-center w-full">
                <div className='flex items-center'>
                <button 
                onClick={()=>setIsOpen(!isOpen)}
                id="toggleSidebar" aria-expanded="true" aria-controls="sidebar" className="p-2 mr-3 text-gray-600 rounded cursor-pointer lg:inline hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700">
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12"> <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h14M1 6h14M1 11h7"/> </svg>
                </button>
                
                <div>
                    <p className='text-gray-950 text-sm md:text-xl font-semibold'>Hello Shahrukh👋🏻,</p>
                </div>
                </div>
                <div className=''>
                <form action="#" method="GET" className="w-1/2 lg:pl-2">
                    <label htmlFor="topbar-search" className="sr-only">Search</label>
                    <div className="relative mt-1">
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"> <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/> </svg>
                    </div>
                    <input 
                    type="text" 
                    name="email" 
                    id="topbar-search" 
                    className="bg-white text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block text-left pl-9 p-2.5 outline-none dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" 
                    placeholder="Search"
                    />
                    </div>
                </form>
                </div>

                
            </div>
        </div>
    </nav>
  )
}

export default DashNavbar