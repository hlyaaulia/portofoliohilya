'use client';
import { useState } from 'react';
import Card from '../../../../../components/card';
import { useRouter } from 'next/navigation';
export default function AdminBlogsForm() {
    const [data, setData] = useState({
        title:'',
        id:'',
        subtitle:'',
        content:'',
      });

      const inputHandler = (e) => {
        setData({...data,[e.target.name]:e.target.value})
      };
      async function onSubmitData() {
        try{
          let res = await fetch('/api/blogs', {
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
      return (
        <>
       <Card title="Blogs Form" className="pb-5">
        <div className="w-full my-2">
            <label>Title</label> 
            <input 
              type="text" 
              name='title'
              value={data.title}
              onChange={inputHandler}
              className="w-full border my-input-text"/>
        </div>
        <div className="w-full my-2">
            <label>Sub Title</label>
            <input 
              name='subtitle' 
              type="text" 
              onChange={inputHandler}
              className="w-full border my-input-text"/>
        </div>
        <div className="w-full my-2">
            <label>content</label>
            <input 
              name='content' 
              type="text" 
              onChange={inputHandler}
              className="w-full border my-input-text"/>
        </div>
        <button 
          onClick={onSubmitData}
          className="mx-1 h-9 items-center justify-center px-4  rounded-md bg-amber-500">
            <label>Submit Blogs</label>
        </button>
        </Card>
        </>
      )
}