import React from 'react'

export default function Customers(props) {
    

    return (
        <>
            <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
                    <blockquote className="not-italic text-gray-700 mb-4 relative pl-10">
                        <svg className="absolute left-0 top-0 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M21 8h-4V5c0-1.7-1.3-3-3-3s-3 1.3-3 3v3H7c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6-3c0-.6.4-1 1-1s1 .4 1 1v3h-2V5zm6 16H7V10h14v11z"></path>
                        </svg>
                        <p>I wanted to thanks everyone at this facility for the quality of care and compassion they showed during my stay.</p>
                    </blockquote>
                    <div className="flex items-center">
                        <img className="w-12 h-12 rounded-full mr-4" src="https://via.placeholder.com/48" alt="Avatar of Jacqueline Asong"/>
                        <div>
                            <p className="text-lg font-semibold">Jacqueline Asong</p>
                            <p className="text-sm text-gray-500">Patient</p>
                        </div>
                    </div>
            </div>

        </>
    )
}
