'use client'
import { useState } from 'react'

export default function CreateInvitation() {
  const [name, setName] = useState('')
  const [role, setRole] = useState('')
  const [company, setCompany] = useState('')
  const [achievement, setAchievement] = useState('')
  const [emailText, setEmailText] = useState('')
  const [loading, setLoading] = useState(false)
  const [recipients, setRecipients] = useState('')

  // interface GenerateRequestBody {
  //   name: string
  //   role: string
  //   company: string
  //   achievement: string
  //   email: string
  // }

  interface EmailRequestBody {
    to: string
    subject: string
    text: string
  }
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    console.log("sending email.....");
  
   const requestBody: EmailRequestBody = {
  to: "riyakaushik6410@gmail.com", // <-- make sure this is your email
  subject: "Invitation to our Event!",
  text: "You're invited to our event happening on XYZ.",
};

  
    const res: Response = await fetch("/api/send-email", {
      method: "POST",
      body: JSON.stringify(requestBody),
      headers: {
        "Content-Type": "application/json",
      },
    });
  
    const data: { message?: string } = await res.json();
    alert(data.message || "Email sent!");
    console.log(data);
  };
  

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Create Invitation</h1>
      <form className="space-y-4" onSubmit={handleSubmit}>
      <div>
  <label className="block text-lg font-medium mb-2">Recipient Emails</label>
  <textarea
    value={recipients}
    onChange={(e) => setRecipients(e.target.value)}
    className="w-full p-2 border border-gray-300 rounded"
    placeholder="Enter recipient emails, separated by commas"
  ></textarea>
</div>
        <div>
          <label className="block text-lg font-medium mb-2">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Enter name"
          />
        </div>
        <div>
          <label className="block text-lg font-medium mb-2">Role</label>
          <input
            type="text"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="e.g. Chief Guest, Speaker"
          />
        </div>
        <div>
          <label className="block text-lg font-medium mb-2">Company / Organization</label>
          <input
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Enter company or organization"
          />
        </div>
        <div>
          <label className="block text-lg font-medium mb-2">Achievement</label>
          <input
            type="text"
            value={achievement}
            onChange={(e) => setAchievement(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Enter their recent achievement"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-500 hover:bg-blue-600 text-black font-semibold py-2 px-4 rounded"
        >
          {loading ? 'Generating...' : 'Generate Invitation'}
        </button>

        {emailText && (
          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-2">Generated Invitation Email</h2>
            <textarea
              className="w-full h-40 p-3 border rounded bg-gray-50"
              readOnly
              value={emailText}
            />
          </div>
        )}
      </form>
    </div>
  )
}
