import React,{useState} from 'react'

function AnnoyingButton() {
    const [form,setForm] =useState({
        email:'',
        password:'',
    });
    const [toggle,setToggle]=useState(false);
    //onchange input fields
    function handleChange(event){
      setForm((prevState) =>({
        ...prevState,[event.target.name]:event.target.value
      }))
    } 
    //on mouse enter handler
    const annoySubmitButton=()=>{
        if (form.password.length < 6) {
            setToggle((prevState) => !prevState);
          }
    }
    //handler function on form submit
    const handleSubmit=(e) =>{
    e.preventDefault();
    alert("Thanks, the form was submitted");
    setForm({
        email:'',
        password:'',
    })
    }
  return (
    <div className='flex mt-20 flex-col items-center'>
      <h1 className='font-bold text-3xl'>Annoying Submit Button 😡</h1>
      <form className='flex flex-col mt-16 w-[400px] gap-4' method='post' onSubmit={handleSubmit}>
      <div className='flex flex-col'>
      {/*email input field */}
      <label className='font-semibold'>Email
          <span className='text-[red]'>&nbsp;*</span></label>
          <input className={`pl-3 ${(form.email.length>6) ? ('border-[#03bb56] border-2 text-[#03bb56]') 
          :('border-[#ff0000] border-2 text-[#ff0000]')} outline-none py-2  rounded-lg placeholder:text-[15px] placeholder:font-serif`}
           value={form.email} type='email' name="email"
           minLength={6} placeholder='example@example.com' onChange={handleChange} required/>
      </div>
      <div className='flex flex-col'>
       {/*password input field */}
       <label className='font-semibold'>Password
          <span className='text-[red]'>&nbsp;*</span></label>
          <input className={`${(form.password.length>6) ? ('border-[#03bb56] border-2 text-[#03bb56]') 
          :('border-[#ff0000] border-2 text-[#ff0000]')} outline-none py-2 pl-3 rounded-lg`} 
          value={form.password} type='password' name="password" minLength={6}  onChange={handleChange} required/>
          
          <div className='text-[#ff0000] text-[12px] leading-8'>
          {form.password.length <= 6? (<p>Password length should be more then 6</p>):<p>&nbsp;</p>}</div>
         </div>
        <div className={`flex ${(toggle)? 'justify-end': 'justify-start'}`}>
        <button className={`text-white outline-none font-semibold w-[120px] rounded-lg px-2 py-2 
        ${(form.password.length>6)? 'bg-[#03bb56]': 'bg-[#000000]'}`}
        onMouseEnter={annoySubmitButton}
        >Submit</button>
        </div>
      </form>
    </div>
  )
}
export default AnnoyingButton
