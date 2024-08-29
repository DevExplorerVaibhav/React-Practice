import React ,{useState}from 'react'

function DisableButton() {
    const[text,setText]=useState("");
    //handler function for changing value of text box 
    const handleChange=(e)=> {
        setText(e.target.value);
       }
  return (
    <div className='flex flex-col justify-center items-center pt-40 gap-10 w-screen'>
     <h3 className='font-bold text-[20px]'>Disable Button If Text Box is Empty.</h3>
     <div className=''>
     <input type="text" onChange={handleChange}
     className='bg-gray-50 border border-gray-300 w-[270px] text-gray-900 text-sm rounded-lg p-2.5 outline-none mr-6'/>
     <button disabled={text.length < 1} onClick={()=> alert("Button Enabled.")}
     className='rounded bg-indigo-600 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-indigo-500/20 transition-all hover:shadow-lg hover:shadow-indigo-500/40 
               disabled:bg-slate-50 disabled:text-gray-400'>Submit</button>
     </div>
    </div>
  )
}

export default DisableButton
