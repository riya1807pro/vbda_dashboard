export default function CreateInvitation() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Create Invitation</h1>
      <form className="space-y-4">
        <div>
          <label className="block text-lg font-medium mb-2">Event Name</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Enter event name"
          />
        </div>
        <div>
          <label className="block text-lg font-medium mb-2">Date & Time</label>
          <input
            type="datetime-local"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label className="block text-lg font-medium mb-2">Recipient Emails</label>
          <textarea
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Enter recipient emails, separated by commas"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-black font-semibold py-2 px-4 rounded"
        >
          Generate Invitation
        </button>
      </form>
    </div>
  );
}