"use client"
import { useState, useEffect } from "react"

export default function WorkList(){
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([])

    async function onLoadData() {
        setLoading(true)
        let res = await fetch('/api/work')
        let data = await res.json()
        setData(data.data)
        setLoading(false)
    }

    useEffect(() => {
        onLoadData()
    }, [])

    return (
        <>
            
            <table className="table-auto">
                <thead>
                    <tr>
                        <th className='p-2 border-b border-blue-gray-100 bg-gray-100'>#No</th>
                        <th className='p-2 border-b border-blue-gray-100 bg-gray-100'>Title</th>
                        <th className='p-2 border-b border-blue-gray-100 bg-gray-100'>Employe Type</th>
                        <th className='p-2 border-b border-blue-gray-100 bg-gray-100'>Company Name</th>
                        <th className='p-2 border-b border-blue-gray-100 bg-gray-100'>Location</th>
                        <th className='p-2 border-b border-blue-gray-100 bg-gray-100'>Start Date</th>
                        <th className='p-2 border-b border-blue-gray-100 bg-gray-100'>End Date</th>
                        <th className='p-2 border-b border-blue-gray-100 bg-gray-100'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    { loading &&  <tr><td colSpan={8}>Loading...</td></tr> }
                    {!loading && data.map((item,idx)=>{

                        return (
                            <tr key={idx} className='border-b border-blue-gray-50'>
                                <td className='p-2 '>{idx + 1}</td>
                                <td className='p-2 '>{item.title} </td>
                                <td className='p-2 '>{item.employeType}</td>
                                <td className='p-2 '>{item.companyName}</td>
                                <td className='p-2 '>{item.location}</td>
                                <td className='p-2 '>{item.startDate}</td>
                                <td className='p-2 '>{item.endDate}</td>
                                <td className='p-2 '>
                                    <div className="inline-flex text-[12px]">
                                        <button className=" bg-green-300 hover:bg-green-400 text-gray-800 py-2 px-4 rounded-l">
                                            Edit
                                        </button>
                                        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded-r">
                                            Delete
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        )
                        })
                    }
                    
                </tbody>
            </table>
        </>
    )
}