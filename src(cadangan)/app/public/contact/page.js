"use client"
import { useState } from 'react';
import Card from '../../../components/cardss';
export default function Contact() {
  const [data, setData] = useState({
    name:'',
    email:'',
    subject:'',
    message:'',
   
  });
  
  

  const inputHandler= (e) =>{
    setData({...data, [e.target.name]: e.target.value })
  }

  async function onSubmitData() {
    try{
      let res = await fetch('/api/contactt', {
        method:'POST',
        body: JSON.stringify(data),
      })
      let resData = await res.json()
      if(!resData.data){
        throw Error(resData.message)
      }
      alert("Data berhasil disimpan dengan id \n"+ resData.data.insertedId)
    }catch(err){
      console.error("ERR", err.message)
      alert(err.message)
    }
}


  return (<>
      <Card title="Work Form" className="pb-5">
        <div className="w-full my-2">
            <label>Nama</label> 
            <input 
              type="text" 
              name='name'
              value={data.name}
              onChange={inputHandler}
              className="w-full border my-input-text"/>
        </div>

        <div className="w-full my-2">
            <label>Email</label> 
            <input 
              type="text" 
              name='email'
              value={data.email}
              onChange={inputHandler}
              className="w-full border my-input-text"/>
        </div>

        <div className="w-full my-2">
            <label>subject</label> 
            <input 
              type="text" 
              name='subject'
              value={data.subject}
              onChange={inputHandler}
              className="w-full border my-input-text"/>
        </div>

        <div className="w-full my-2">
            <label>massage</label> 
            <input 
              type="text" 
              name='message'
              value={data.message}
              onChange={inputHandler}
              className="w-full border my-input-text"/>
        </div>
        <button 
          onClick={onSubmitData}
          className="mx-1 h-9 items-center justify-center px-4  rounded-md bg-amber-500">
            <label>Submit Data</label>
        </button>
      </Card>
     
    </>
  );
}
  