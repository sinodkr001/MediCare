import React from 'react'
import Image from '../assets/product/doc.jpeg';
import Boy from '../assets/product/boy.jpeg'
import Amb from '../assets/product/a1.png'
import Medi from '../assets/product/medi.jpeg'

export default function Clinic(props) {
    

    return (
        <>
            <div className='bg-gray-100'>
                



                <div className="container mx-auto px-6 py-12">
                    <div className="text-center lg:text-left lg:flex lg:items-center lg:space-x-12">
                        <div className="lg:w-1/2 mx-12 mb-12 lg:mb-0">
                            <h1 className="text-4xl font-bold text-blue-600 mb-4">Clinic With Innovative</h1>
                            <p className="text-gray-600 mb-6">
                                We provide the most full medical services, so every person could have the opportunity to receive qualitative medical help.
                            </p>
                            <a href="#" className="inline-block bg-blue-600 text-white py-3 px-6 rounded-full hover:bg-blue-700 transition duration-300">
                                Learn More
                            </a>
                        </div>
                        <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                        
                            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                                <img src={Image} alt="Qualified Doctors" class="mx-auto mb-4"/>
                                <h3 class="text-lg font-semibold text-gray-700">Qualified Doctors</h3>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                                <img src={Boy} alt="Emergency Care" className="mx-auto mb-4"/>
                                <h3 class="text-lg font-semibold text-gray-700">Emergency Care</h3>
                            </div>
                            
                            
                            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                                <img src={Amb} alt="24 Hours Service" className="mx-auto mb-4"/>
                                <h3 className="text-lg font-semibold text-gray-700">24 Hours Service</h3>
                            </div>
                            
                            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                                <img src={Medi} alt="24 Hours Service" className="mx-auto mb-4"/>
                                <h3 className="text-lg font-semibold text-gray-700 mt-16">Medicine</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
