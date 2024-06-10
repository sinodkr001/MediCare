import React from 'react'

export default function Section(props) {
    

    return (
        <>
           <div  class="bg-gray-100">
             <div className="container mx-auto px-6 py-12">
                <div className="flex flex-col lg:flex-row items-center bg-white p-8 rounded-lg shadow-md">
                    <div className="lg:w-1/2 mb-8 lg:mb-0">
                        <h1 className="text-gray-700 font-bold text-xl mb-2">Welcome to MediCare+ Clinic</h1>
                        <h2 className="text-4xl font-bold text-blue-900 mb-4">Best Specialists</h2>
                        <p className="text-gray-600 mb-6">We are on the leading edge of cancer care. Providing the full continuum of cancer treatments and supportive care services in a single convenient location.</p>
                        <div className="flex space-x-4">
                            <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg">Make an Appointment</button>
                            <button className="bg-white text-blue-500 border border-blue-500 font-bold py-2 px-4 rounded-lg">Departments</button>
                        </div>
                    </div>
                    <div className="lg:w-1/2 bg-blue-200 rounded-lg h-64 lg:h-auto">
                        
                    </div>
                </div>
             </div>
        </div> 
        </>
    )
}
