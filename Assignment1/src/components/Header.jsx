import React from 'react'

export default function Header(props) {
    

    return (
        <>


           <nav className="bg-white shadow-md">
                    <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                        
                        <div className="text-2xl font-bold">
                            <span className="text-blue-600">Medi</span><span className="text-orange-500">Care</span><span className="text-red-500">+</span>
                        </div>
                    
                        <div className="hidden md:flex space-x-8">
                            <a href="#" className="text-blue-600 font-semibold">Home</a>
                            <a href="#" className="text-gray-600 hover:text-blue-600 transition duration-300">About</a>
                            <a href="#" className="text-gray-600 hover:text-blue-600 transition duration-300">Services</a>
                            <a href="#" className="text-gray-600 hover:text-blue-600 transition duration-300">News</a>
                        </div>
                        
                        <div className="hidden md:block">
                            <a href="#" className="bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition duration-300">Contact</a>
                        </div>
                    
                        <div class="md:hidden">
                            <button className="text-gray-600 focus:outline-none">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
    
                    <div className="hidden md:hidden px-6 py-4">
                        <a href="#" className="block text-blue-600 font-semibold mb-2">Home</a>
                        <a href="#" className="block text-gray-600 hover:text-blue-600 transition duration-300 mb-2">About</a>
                        <a href="#" className="block text-gray-600 hover:text-blue-600 transition duration-300 mb-2">Services</a>
                        <a href="#" className="block text-gray-600 hover:text-blue-600 transition duration-300 mb-2">News</a>
                        <a href="#" className="block bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition duration-300">Contact</a>
                    </div>
            </nav>
  
        </>
    )
}
