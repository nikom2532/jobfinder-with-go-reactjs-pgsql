import { useEffect, useState } from 'react'
import axios from 'axios'

interface Application {
  id: number
  jobTitle: string
  userEmail: string
  status: string
}

export default function Applications() {
  const [applications, setApplications] = useState<Application[]>([])

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const token = localStorage.getItem('token')
        const res = await axios.get<Application[]>('/applications', {
          headers: {
            Authorization: `Bearer ${token}`
}
})
  setApplications(res.data)
} catch (err) {
  console.error('Error fetching applications:', err)
}
}
fetchApplications()
}, [])

return (
  <div className="max-w-3xl mx-auto mt-10">
    <h2 className="text-2xl font-bold mb-6">My Applications</h2>
    {applications.length === 0 ? (
      <p>No applications found.</p>
    ) : (
      <ul className="space-y-4">
        {applications.map((app) => (
          <li key={app.id} className="p-4 border rounded shadow">
            <h3 className="text-xl font-semibold">Job: {app.jobTitle}</h3>
            <p className="text-gray-600">Status: {app.status}</p>
            <p className="text-gray-500 text-sm">Email: {app.userEmail}</p>
          </li>
        ))}
      </ul>
    )}
  </div>
)
}