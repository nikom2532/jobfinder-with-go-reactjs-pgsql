// 📁 src/pages/Jobs.tsx

import { useEffect, useState } from 'react'
import axios from 'axios'

type Job = {
  ID: number
  Title: string
  Description: string
}

export default function Jobs() {
  const [jobs, setJobs] = useState<Job[]>([])

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const token = localStorage.getItem('token')
        const res = await axios.get<Job[]>('/jobs', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        console.log('Jobs response:', res.data)
        setJobs(res.data)
      } catch (err) {
        console.error('Error fetching jobs:', err)
      }
    }
    fetchJobs()
  }, [])

  return (
    <div className="max-w-3xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-6">Available Jobs</h2>
      <ul className="space-y-4">
        {jobs.map((job) => (
          <li key={job.id} className="p-4 border rounded shadow">
            <h3 className="text-xl font-semibold">{job.Title}</h3>
            <p className="text-gray-600">{job.Description}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
