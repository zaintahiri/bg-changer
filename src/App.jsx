import { useState } from 'react'
import './App.css'

function App() {
  const [bgChanger,setColor]=useState("bg-zinc-900 text-white");
  return (
    <>
      <div className={"w-full h-screen duration-200 "+bgChanger}>
          <h1>Color is changed</h1>

          <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
              <div className='flex flex-wrap justify-center gap-2 shadow-lg bg-white px-3 py-2 rounded-3xl'>            

                  <button onClick={()=>{ setColor("bg-zinc-900 text-white") }} 
                        className='w-[100px] bg-black text-white px-5 py-2 font-sm border-2 rounded-3xl mr-2'>Black</button>
                  <button onClick={()=>{setColor("bg-white text-black")}} 
                        className='w-[100px] bg-white text-black px-3 py-2 font-sm border-2 rounded-3xl mr-2'>White</button>
                  <button onClick={()=>{setColor("bg-red-500 text-white")}} 
                        className='w-[100px] bg-red-500 text-white px-3 py-2 font-sm border-2 rounded-3xl mr-2'>Red</button>
                  <button onClick={()=>{setColor("bg-yellow-500 text-white")}} 
                        className='w-[100px] bg-yellow-500 text-white px-3 py-2 font-sm border-2 rounded-3xl mr-2'>Yellow</button>
                  <button onClick={()=>{setColor("bg-pink-500 text-white")}} 
                        className='w-[100px] bg-pink-500 text-white px-3 py-2 font-sm border-2 rounded-3xl mr-2'>Pink</button>
                  <button onClick={()=>{setColor("bg-green-500 text-white")}} 
                        className='w-[100px] bg-green-500 text-white px-3 py-2 font-sm border-2 rounded-3xl mr-2'>Green</button>
                  <button onClick={()=>{setColor("bg-zinc-500 text-white")}} 
                        className='w-[100px] bg-zinc-500 text-white px-3 py-2 font-sm border-2 rounded-3xl mr-2'>Gray</button>
                  <button onClick={()=>{setColor("bg-blue-500 text-white")}} 
                        className='w-[100px] bg-blue-500 text-white px-3 py-2 font-sm border-2 rounded-3xl mr-2'>Blue</button>
                  <button onClick={()=>{setColor("bg-purple-900 text-white")}} 
                        className='w-[100px] bg-purple-900 text-white px-3 py-2 font-sm border-2 rounded-3xl mr-2'>Purple</button>
                  <button onClick={()=>{setColor("bg-gold-500 text-white")}} 
                        className='w-[100px] bg-gold-500 text-white px-3 py-2 font-sm border-2 rounded-3xl mr-2'>Golden</button>
              </div>
          </div>
       </div>
    </>
  )
}

export default App
