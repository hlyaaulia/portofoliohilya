"use client";
import { useEffect, useState } from 'react';

export default function Dashboard() {
  const [workData, setWorkData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchWorkData() {
      try {
        const response = await fetch('/api/work');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setWorkData(data.data); 
      } catch (error) {
        console.error("Error fetching work data:", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchWorkData();
  }, []);

  const handleDelete = async (id) => {
    if (confirm("Are you sure you want to delete this entry?")) {
      try {
        const response = await fetch(`/api/work?id=${id}`, {
          method: 'DELETE',
        });
        if (!response.ok) {
          throw new Error('Failed to delete the entry');
        }
        
        setWorkData(workData.filter(item => item._id !== id));
      } catch (error) {
        console.error("Error deleting entry:", error);
      }
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-50">
      <h2 className="text-xl font-bold mb-4">Work Experience Dashboard</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-2 px-4 border-b">name</th>
              <th className="py-2 px-4 border-b">email</th>
              <th className="py-2 px-4 border-b">Subject</th>
              <th className="py-2 px-4 border-b">message</th>
            </tr>
          </thead>
          <tbody>
            {workData.map((item) => (
              <tr key={item._id} className="hover:bg-gray-100">
                <td className="py-2 px-4 border-b">{item.name}</td>
                <td className="py-2 px-4 border-b">{item.email}</td>
                <td className="py-2 px-4 border-b">{item.subject}</td>
                <td className="py-2 px-4 border-b">{item.message}</td>
                <td className="py-2 px-4 border-b">
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
