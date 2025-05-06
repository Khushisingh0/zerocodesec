import React from 'react';
import Header from './Header';
import '@/style.css'; // Ensure Tailwind is loaded here

export default function DashBoard() {
  return (
    <div className="min-h-screen bg-[#06b5d411]">
     <Header/>

      
      <div className="p-4 flex flex-wrap gap-4 ">
        
        <div className="w-full sm:w-[48%] xl:w-[32%] bg-white rounded-2xl shadow p-4 text-black" style={{height:"300px"}}>
       card 1
        </div>

        
        <div className="w-full sm:w-[48%] xl:w-[32%] bg-white rounded-2xl shadow p-4  text-black">
          Auto-fixed Pending issues
        </div>

    
        <div className="w-full sm:w-[48%] xl:w-[32%] bg-white rounded-2xl shadow p-4  text-black">
          high level
        </div>

        
        <div className="w-full md:w-[48%] bg-white rounded-2xl shadow p-4  text-black  " style={{height:"400px"}}>
        Recent Activity
        </div>

        <div className='w-full md:w-[48%]  p-4  text-black h-78  '>

        <div className="w-full md:w-[100%] bg-white rounded-2xl shadow p-4  text-black mb-3 "  style={{height:"50%"}} >
        CI/CD Integration
       
        </div>
        <div className="w-full md:w-[100%] bg-white rounded-2xl shadow p-4  text-black"  style={{height:"50%"}}>
          Quick Actions
        </div>

        </div>
      
       
      </div>
     
        
    </div>
  );
}
