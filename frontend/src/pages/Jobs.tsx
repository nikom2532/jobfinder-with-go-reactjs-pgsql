import { useEffect, useState } from 'react'
import axios from 'axios'

interface Job {
  id: number
  title: string
  description: string
}

export default function Jobs() {
  const [jobs, setJobs] = useState<Job[]>([])

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const token = localStorage.getItem('token')
        const res = await axios.get<Job[]>('/jobs', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
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
            <h3 className="text-xl font-semibold">{job.title}</h3>
            <p className="text-gray-600">{job.description}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
