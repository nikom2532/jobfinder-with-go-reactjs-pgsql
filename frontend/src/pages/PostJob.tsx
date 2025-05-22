import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function PostJob() {
    const [title, setTitle] = useState<string>('')
    const [description, setDescription] = useState<string>('')
    const [error, setError] = useState<string>('')
    const [success, setSuccess] = useState<boolean>(false)
    const navigate = useNavigate()

    const handlePost = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            const token = localStorage.getItem('token')
            const res = await axios.post(
                '/jobs',
                { title, description },
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            )
            setSuccess(true)
            setError('')
            setTitle('')
            setDescription('')
            setTimeout(() => {
                navigate('/jobs')
            }, 2000)
        } catch (err) {
            setError('Failed to post job')
            setSuccess(false)
        }
    }

    return (
        <div className="max-w-md mx-auto mt-10 p-6 border rounded-xl shadow">
            <h2 className="text-2xl font-bold mb-4">Post a New Job</h2>
            {success && (
                <div className="text-green-600 mb-4">Job posted successfully!</div>
            )}
            {error && <div className="text-red-600 mb-4">{error}</div>}

            <form onSubmit={handlePost}>
                <input
                    type="text"
                    placeholder="Job Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full p-2 mb-4 border rounded"
                    required
                />
                <textarea
                    placeholder="Job Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full p-2 mb-4 border rounded h-32"
                    required
                />
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
                >
                    Post Job
                </button>
            </form>
        </div>
    )
}