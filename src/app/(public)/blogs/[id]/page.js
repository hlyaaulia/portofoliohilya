'use client'
import Card from '../../../../components/card';
import { useState, useEffect } from 'react'
import { useRef } from 'react';
import { useParams } from 'next/navigation'

export default function Blogsbyid() {
    const params = useParams();
    // const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(true)

    const editorRef = useRef(null);
    const [modal, setModal] = useState(false)
    const [modalnama, setModalnama] = useState("")
    const [modalkomentar, setModalkomentar] = useState("")
    const [data, setData] = useState({
        nama:'',
        komentar:'',
    });

    const onFetchBlogs=async()=>{
        try{
            setLoading(true)
            let res = await fetch(`/api/blogs/${params.id}`)
            let data = await res.json()
            setData(data.data)
            setLoading(false)
        }catch(err){
            console.log('err', err)
            setData(null)
            setLoading(false)
        }
    }
    useEffect(()=>{
        onFetchBlogs()
    },[])

    if(isLoading) return (<>Loading...</>)

    const clearData = ()=>{
        setData({
            nama:'',
            komentar:'',
        })
    }

    const inputHandler= (e) =>{
        setData({...data, [e.target.name]: e.target.value })
    }

    const onCancel=()=>{
        setModal(false)
        setModalnama('')
        setModalkomentar('')
        clearData()
    }

    async function onSubmitData() {
        try{
            if (editorRef.current) {
                const body = data
                body.content = editorRef.current.getContent();

                let res = await fetch('/api/blogs', {
                    method:'POST',
                    body: JSON.stringify(body),
                })

                let resData = await res.json()
                if(!resData.data){
                throw Error(resData.message)
                }
                setModal(true)
                setModalnama('Info')
                setModalkomentar(resData.message)
            }
        }catch(err){
          console.error("ERR", err.message)
          setModal(true)
          setModalnama('Err')
          setModalkomentar(err.message)
        }
      }

    return (
    <>
  
            <div className='margin-0 mx-auto w-2/3'>
                <h2 className="text-center text-[32px] font-bold w-full">{data.title}</h2>
                <div className='mt-10  ' dangerouslySetInnerHTML={{ __html: data.content }}/>
            </div>

        <Card title="Blogs Form">
            <div className="w-full my-2">
                <label>Nama</label>
                    <input 
                        name='nama'
                        value={data.nama}
                        onChange={inputHandler}
                        type="text" 
                        className="w-full border my-input-text"/>
            </div>
            
            <div className="w-full my-2">
                <label>komentar</label>
                    <input 
                        name='komentar'
                        value={data.komentar}
                        onChange={inputHandler}
                        className="w-full border my-input-text"/>
            </div>


            <button  className="btn-primary" onClick={onSubmitData}>
                <span className="relative text-sm font-semibold text-white">
                    Submit
                </span>
            </button>
        </Card>

        {/* <ConfigDiaglog
            onOkOny={()=>onCancel()} 
            showDialog={modal}
            nama={modalnama}
            komentar={modalkomentar}
            onCancel={()=>onCancel()} 
            onOk={()=>onCancel()} 
            isOkOnly={true} /> */}
    </>
    )
}