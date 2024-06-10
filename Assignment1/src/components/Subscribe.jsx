import React from 'react'

export default function Subscribe(props) {
    

    return (
        <>
           
           <div className="bg-gray-100">
           <div className="container mx-auto px-12 py-12">
                <div className="max-w-full-lg w-full bg-blue-500 text-white p-8 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold mb-2">Subscribe to Newsletter</h2>
                    <p className="mb-6">We have a wide experience in experience design and strategy.</p>
                    <form className="flex items-center bg-white rounded-full p-2">
                        <input 
                            type="email" 
                            placeholder="Enter your email address" 
                            class="flex-grow px-12 py-2 text-gray-700 rounded-full focus:outline-none"
                            required/>
                        <button 
                            type="submit" 
                            className="ml-6 bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition duration-300">
                            Send Now
                        </button>
                    </form>
                </div>

                </div>






               
            </div>
            
            
          








           
        </>
    )
}
