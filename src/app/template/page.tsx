"use client";
import { useState } from "react";

export default function TemplatePage() {
  const [preview, setPreview] = useState("");

  const generate = async () => {
    const res = await fetch("/api/generate-email", {
      method: "POST",
      body: JSON.stringify({
        name: "Raj Mehta",
        role: "Founder",
        company: "TechNova",
        achievement: "raising $5M in funding",
      }),
      headers: { "Content-Type": "application/json" },
    });

    const data = await res.json();
    setPreview(data.email);
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Email Template Preview</h2>
      <button onClick={generate} className="mb-4 bg-green-600 text-black px-4 py-2 rounded">
        Generate Sample Email
      </button>
      <textarea
        className="w-full h-64 p-2 border"
        value={preview}
        onChange={(e) => setPreview(e.target.value)}
      />
    </div>
  );
}
