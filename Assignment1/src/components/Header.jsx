import React from 'react'

export default function Header(props) {
    

    return (
        <>
        
          
           <div className='bg-gray-100'>
            <header className="bg-white shadow-md">
                <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <div className="text-2xl font-bold">
                        <span className="text-blue-600">Medi</span><span className="text-orange-500">Care</span><span className="text-red-500">+</span>
                    </div>
                    <nav class="space-x-8">
                        <a href="#" className="text-blue-600 font-semibold">Home</a>
                        <a href="#" className="text-gray-600 hover:text-blue-600 transition duration-300">About</a>
                        <a href="#" className="text-gray-600 hover:text-blue-600 transition duration-300">Services</a>
                        <a href="#" className="text-gray-600 hover:text-blue-600 transition duration-300">News</a>
                    </nav>
                </div>
            </header>
            </div>



           
        </>
    )
}
