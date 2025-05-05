"use client";
import { useState } from "react";

export default function UploadPage() {
  const [file, setFile] = useState<File | null>(null);
  const [recipients, setRecipients] = useState([]);

  const handleUpload = async () => {
    const formData = new FormData();
    if (!file) return;

    formData.append("file", file);
    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });
    const data = await res.json();
    setRecipients(data.recipients);
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Upload Recipient CSV</h2>
      <input type="file" onChange={(e) => setFile(e.target.files?.[0] || null)} />
      <button onClick={handleUpload} className="mt-4 bg-blue-600 text-black px-4 py-2 rounded">
        Upload
      </button>

      <pre className="mt-6 bg-gray-100 p-4 rounded text-sm">
        {JSON.stringify(recipients, null, 2)}
      </pre>
    </div>
  );
}
