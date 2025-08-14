import { useState } from 'react'
import './App.css'
import Header from './components/Header'
function App() {
  return (<>
  
<div  className='w-full overflow-hidden'>
    <Header/>
</div>
    {/* <div className='min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden' style={{backgroundImage: "url('/header_img.png')"}} id='Header'></div> */}
  </>
  )
}

export default App
