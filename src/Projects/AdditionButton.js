import React,{useState} from 'react'

function AdditionButton() {
    const[text,setText]=useState({
        input1: '',
        input2: '',
    });
    const[sum,setSum]=useState("");
    //handler function for changing value of text box 
    const handleChange=(event)=> {
        setText((prevState) =>({
            ...prevState,[event.target.name]:event.target.value
        }));
        console.log(text);
       }
     const handleAddition=() =>{
           setSum(parseInt(text.input1) + parseInt(text.input2));
     }
  return (
    <div>
       <div className='flex flex-col justify-center items-center pt-40 gap-10 w-screen'>
     <p className='font-bold text-[20px]'>Disable Button If Both Text Boxes Are Empty.</p>
     {/*first input box */}
      <input type="number" onChange={handleChange} name='input1' value={text.input1}
     className='bg-gray-50 border border-gray-300 w-[270px] text-gray-900 text-sm rounded-lg p-2.5 outline-none mr-6'/>
       {/*Second input box */}
      <input type="number" onChange={handleChange} name='input2' value={text.input2}
     className='bg-gray-50 border border-gray-300 w-[270px] text-gray-900 text-sm rounded-lg p-2.5 outline-none mr-6'/>
      {/*Submit button*/}
     <button disabled={text.input1 === '' || text.input2 === ''} onClick={handleAddition}
     className='rounded bg-indigo-600 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-indigo-500/20 transition-all hover:shadow-lg hover:shadow-indigo-500/40 
               disabled:bg-slate-50 disabled:text-gray-400'>Submit</button>
               {(sum !=="")?(<p className='font-bold text-[20px]'>{`Sum of input values : ${sum}`}</p>): <p>&nbsp;</p>}
     </div>
     </div>
  )
}

export default AdditionButton
