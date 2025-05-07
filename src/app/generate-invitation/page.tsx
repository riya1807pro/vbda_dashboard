"use client";

import React, { useState, useEffect } from "react";

const roles = ["Judge", "Student", "Guest", "Faculty"];

const defaultMessages = {
  Judge: `Dear Respected Judge,

We cordially invite you to the VBDA 2025 event. Your presence as a judge will add great value to the event. Looking forward to your presence.

Best regards,
VBDA Team`,
  Student: `Dear Student,

You're invited to be a part of the exciting VBDA 2025 event! Join us and showcase your skills and creativity. We can’t wait to see you there!

Cheers,
VBDA Team`,
  Guest: `Dear Guest,

You are warmly invited to attend the VBDA 2025 event. It would be our honor to have you join us in celebrating innovation and talent.

Sincerely,
VBDA Team`,
  Faculty: `Dear Faculty Member,

We are pleased to invite you to the VBDA 2025 event. Your guidance and encouragement play a vital role in student success. Join us in celebrating achievements.

Warm regards,
VBDA Team`,
};

type RecipientType = keyof typeof defaultMessages;

const InvitationGenerator = () => {
  const [recipient, setRecipient] = useState<RecipientType | "">("");
  const [message, setMessage] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (recipient) {
      setMessage(defaultMessages[recipient]);
    } else {
      setMessage("");
    }
  }, [recipient]);

  const handleGenerate = () => {
    if (recipient) {
      setMessage(defaultMessages[recipient]);
      setCopied(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(message);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-3xl mx-auto p-4 mt-8 bg-white rounded-xl shadow-md dark:bg-gray-900 dark:text-white">
      <h2 className="text-2xl font-bold mb-4 text-center">🎉 Invitation Generator</h2>

      <label className="block mb-2 font-semibold">Select Recipient Type:</label>
      <select
        value={recipient}
        onChange={(e) => setRecipient(e.target.value as RecipientType)}
        className="w-full p-2 mb-4 rounded border dark:bg-gray-800 dark:border-gray-700"
      >
        <option value="">-- Select --</option>
        {roles.map((role) => (
          <option key={role} value={role}>
            {role}
          </option>
        ))}
      </select>

      <button
        onClick={handleGenerate}
        disabled={!recipient}
        className="bg-black text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
      >
        Generate Message
      </button>

      {message && (
        <>
          <label className="block mt-6 mb-2 font-semibold">Customize Message:</label>
          <textarea
            rows={8}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-3 rounded border dark:bg-gray-800 dark:border-gray-700"
          />

          <button
            onClick={handleCopy}
            className="mt-4 bg-green-600 text-black px-4 py-2 rounded hover:bg-green-700"
          >
            {copied ? "✅ Copied!" : "Copy to Clipboard"}
          </button>
        </>
      )}
    </div>
  );
};

export default InvitationGenerator;
