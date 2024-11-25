'use client';
import { useRouter } from 'next/navigation';
import Card from "../../../../components/card";
import ConfigDialog from "../../../../components/ConfirmDialog";
import { useState } from 'react';
export default function AdminBlogs() {
    const router = useRouter()
    const [modal, setModal] = useState(false)
    const [modalTitle, setModalTitle] = useState("")
    const [modalMessage, setModalMessage] = useState("")
    const [blogs, setblogs] = useState([])
    const onAddNew = () =>{
        router.push('/admin/blogs/form')
    }
    const fetchData = async()=>{
        try{
            const res= await fetch('/api/blogs');
            let responsetData = await res.json()
            setblogs(responsetData)
        }catch(err)
        {
            console.error("ERR" , err.message)
            setModal(true)
            setModalTitle('Err')
            setModalMessage(err.message)
        }
    }
    return (
      <>
        <Card title="List of Message" style="mt-6">
        <button 
        onClick={onAddNew}
        className="bg-red-300 hover:bg-red-400 text-gray-800 py-2 px-4 rounded-r">
                                   Addnew
                                </button>
        <table className="table-auto">
                <thead>
                    <tr>
                        <th className='p-2 border-b border-blue-gray-100 bg-gray-100'>Title</th>
                        <th className='p-2 border-b border-blue-gray-100 bg-gray-100'>Sub_Title</th>
                        <th className='p-2 border-b border-blue-gray-100 bg-gray-100'>Content</th>
                        <th className='p-2 border-b border-blue-gray-100 bg-gray-100'>Created_at</th>
                        <th className='p-2 border-b border-blue-gray-100 bg-gray-100'>Action</th>
                    </tr>
                </thead>
                <tbody>
                <tr className='border-b border-blue-gray-50 '>
                        <td className='p-2 '>3</td>
                        <td className='p-2 '>Jhon doe</td>
                        <td className='p-2 '>jhondoe@mail.com</td>
                        <td className='p-2 '>Loremipsum</td>
                        <td className='p-2 '>
                            <div className="inline-flex text-[12px]">
                                <button className=" bg-green-300 hover:bg-green-400 text-gray-800 py-2 px-4 rounded-l">
                                    Detail 
                                </button>
                                
                                <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4">
                                    Edit
                                </button>
                                <button className="bg-red-300 hover:bg-red-400 text-gray-800 py-2 px-4 rounded-r">
                                    Delete
                                </button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </Card>
      </>
    );
}