import React from 'react'

export default function Specialist({drname,area}) {
    

    return (
        <>
            <div className="max-w-xs w-full bg-white shadow-md rounded-lg overflow-hidden">
                <div className="bg-blue-300 h-48"></div>
                <div className="p-4">
                    <h2 className="text-xl font-bold text-gray-800">{drname}</h2>
                    <p className="text-gray-600">{area}</p>
                </div>
             </div>
        </>
    )
}
