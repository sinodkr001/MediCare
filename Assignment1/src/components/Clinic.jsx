import React from 'react'

export default function Clinic(props) {
    

    return (
        <>
            <div className='bg-gray-100'>
            <div class="container mx-auto px-4 py-12">
        <div class="flex flex-col lg:flex-row items-center">
            <div class="lg:w-1/2 mb-8 lg:mb-0">
                <h1 class="text-3xl font-bold text-blue-900 mb-4">Clinic With Innovative</h1>
                <p class="text-gray-600 mb-6">We provide the most full medical services, so every person could have the opportunity to receive qualitative medical help.</p>
                <button class="bg-blue-500 text-white px-6 py-2 rounded-lg shadow-lg">Learn More</button>
            </div>
            <div class="lg:w-1/2 flex flex-wrap justify-center lg:justify-end">
                <div class="w-full sm:w-1/2 md:w-1/3 p-4">
                    <div class="bg-white p-6 rounded-lg shadow-lg text-center">
                        <img src="path/to/doctor-icon.png" alt="Qualified Doctors" class="mx-auto mb-4"/>
                        <h2 class="text-lg font-semibold text-gray-800">Qualified Doctors</h2>
                    </div>
                </div>
                <div class="w-full sm:w-1/2 md:w-1/3 p-4">
                    <div class="bg-white p-6 rounded-lg shadow-lg text-center">
                        <img src="path/to/emergency-icon.png" alt="Emergency Care" class="mx-auto mb-4"/>
                        <h2 class="text-lg font-semibold text-gray-800">Emergency Care</h2>
                    </div>
                </div>
                <div class="w-full sm:w-1/2 md:w-1/3 p-4">
                    <div class="bg-white p-6 rounded-lg shadow-lg text-center">
                        <img src="path/to/ambulance-icon.png" alt="24 Hours Service" class="mx-auto mb-4"/>
                        <h2 class="text-lg font-semibold text-gray-800">24 Hours Service</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
            </div>
        </>
    )
}
