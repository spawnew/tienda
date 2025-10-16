import React from 'react'
import { useState } from 'react'
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
                <input type="text" onChange={handleChange} name="producto" value={form.producto} placeholder='Buscar un articulo'>
                </input>
</form>
    </div>
  )
}

export default Form