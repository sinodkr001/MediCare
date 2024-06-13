import React, { useState,useEffect } from 'react'
import axios from 'axios'
import Header from './components/Header'
import Services  from './components/Services'
import Specialist from './components/Specialist'
import Customers from './components/Customers'
import Subscribe from './components/Subscribe'
import Section from './components/Section'
import Clinic from './components/Clinic'
import Footer from './components/Footer'
import Headfoot from './components/Headfoot'
import Review from './components/Review'
import './App.css'

function App() {
  

  return (
    <div className='bg-gray-100'>

      <Header />
      <Section/>
      <div className='text-center justify-center'>
      <h1 className='text-center text-4xl font-bold text-blue-900 my-6'>Our Services </h1>
      <p className=''>We provide the most full medical services,so every person could</p>
      <p> heave the oppurtunity to recieve qualitative medical help.</p>
       </div>
      <Services/>

      <Clinic/>

      <h1 className='text-center text-4xl font-bold text-blue-900 my-6'>We Have The Best Specialist </h1>
      <p className='text-center'>We have a wide experience in experience design and strategy,</p>
      <p>with locally-rooted knowledge.</p>
      <div className='bg-gray-100 '>
           <div className="container mx-auto px-6 py-12">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Specialist drname="Dr.Awaatif Al" area="Dental Care"/>
                <Specialist drname="Dr.Filipa Gaspar" area="Cardiology"/>
                <Specialist drname="Dr.Sukhmeet Gorae" area="Neurological"/>
                <Specialist drname="Dr.Siri Jakobsson" area="Prediatrics"/>
              </div>
            </div>
        </div>
      <h1 className='text-left text-4xl font-bold text-blue-900 mx-12'>What Our Customers Say </h1>
      <div className='bg-gray-100 '>
           <div className="container mx-auto px-6 py-12">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">

                      <Customers/>
                      <Customers/>
              </div>
            </div>
      </div>
      <Review/>
      <Subscribe/>



      <Headfoot /> 
      <Footer/>

      
      
    </div>
  )
}

export default App
