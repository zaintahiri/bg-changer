import { useState } from 'react'
import './App.css'

function App() {
  const [bgChanger,setColor]=useState("bg-zinc-900 text-white");
  return (
    <>
      <div className={"flex flex-col w-screen h-screen p-1 "+bgChanger}>
          <h1>Color is changed</h1>

          <div className='flex flex-row w-full bg-white absolute bottom-0 border-2 rounded p-2'>
            <button onClick={()=>{ setColor("bg-zinc-900 text-white") }} 
                  className='bg-black text-white px-3 py-2 font-sm border-2 rounded mr-2'>Black</button>
            <button onClick={()=>{setColor("bg-white text-black")}} 
                  className='bg-white text-black px-3 py-2 font-sm border-2 rounded mr-2'>White</button>
            <button onClick={()=>{setColor("bg-red-500 text-white")}} 
                  className='bg-red-500 text-white px-3 py-2 font-sm border-2 rounded mr-2'>Red</button>
            <button onClick={()=>{setColor("bg-yellow-500 text-white")}} 
                  className='bg-yellow-500 text-white px-3 py-2 font-sm border-2 rounded mr-2'>Yellow</button>
            <button onClick={()=>{setColor("bg-pink-500 text-white")}} 
                  className='bg-pink-500 text-white px-3 py-2 font-sm border-2 rounded mr-2'>Pink</button>
            <button onClick={()=>{setColor("bg-green-500 text-white")}} 
                  className='bg-green-500 text-white px-3 py-2 font-sm border-2 rounded mr-2'>Green</button>
            <button onClick={()=>{setColor("bg-zinc-500 text-white")}} 
                  className='bg-zinc-500 text-white px-3 py-2 font-sm border-2 rounded mr-2'>Gray</button>
            <button onClick={()=>{setColor("bg-blue-500 text-white")}} 
                  className='bg-blue-500 text-white px-3 py-2 font-sm border-2 rounded mr-2'>Blue</button>
            <button onClick={()=>{setColor("bg-purple-900 text-white")}} 
                  className='bg-purple-900 text-white px-3 py-2 font-sm border-2 rounded mr-2'>Purple</button>
            <button onClick={()=>{setColor("bg-gold-500 text-white")}} 
                  className='bg-gold-500 text-white px-3 py-2 font-sm border-2 rounded mr-2'>Golden</button>

          </div>
       </div>
    </>
  )
}

export default App
