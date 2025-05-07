import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="bg-gray-300  w-64 min-h-screen p-4">
      <h2 className="text-2xl font-bold mb-6">VBDA Dashboard</h2>
      <nav className="flex flex-col space-y-4">
        <Link href="/">
          <h1>Welcome</h1>
        </Link>
        <Link href="/create-invitation">
          <h2>Create Invitation</h2>
        </Link>
        <Link href="/upload">
          <h3>upload</h3>
        </Link>
        <Link href="/generate-invitation">
          <h3>Generate invitation</h3>
        </Link>
      </nav>
    </div>
  );
}
