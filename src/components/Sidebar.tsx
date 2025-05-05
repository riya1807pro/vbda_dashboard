import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="bg-gray-800  w-64 min-h-screen p-4">
      <h2 className="text-2xl font-bold mb-6">VBDA Dashboard</h2>
      <nav className="flex flex-col space-y-4">
        <Link href="/" legacyBehavior>
          <a>Home</a>
        </Link>
        <Link href="/createInvitation" legacyBehavior>
          <a>Create Invitation</a>
        </Link>
        <Link href="/upload" legacyBehavior>
          <a>upload</a>
        </Link>
      </nav>
    </div>
  );
}