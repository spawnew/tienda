import React from 'react'
import { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom'

const Form = ({obtener}) => {
 
  const [form, setForm] = useState({ producto: "" })
     const handleChange = (e) => {
         setForm({
             ...form,
             [e.target.name]: e.target.value
         })
     }
   const handleSubmit = (e) => {
     e.preventDefault()
     console.log(form)
     obtener(form)
     setForm({  producto:"" })
   }
 
 
    return (
      <div>
          
<form onSubmit={handleSubmit}>
                <input className='p-3 w-150 md:w-100  bg-amber-50 rounded-2xl text-black' type="text" onChange={handleChange} name="producto" value={form.producto} placeholder='Buscar un articulo'>
                </input>
                <Link to="/producto"> 
                <button className='login-btn' type='submit'> <FaSearch /></button>
</Link>
            </form>
    </div>
  )
}

export default Form