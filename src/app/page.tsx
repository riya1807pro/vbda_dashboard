import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-red-700 min-h-screen flex flex-col items-center justify-center text-black">
      <h1 className="text-5xl font-bold mb-4">
        Welcome to VBDA 2025 Invitations
      </h1>
      <p className="text-xl mb-6 text-center">
        Create and send AI-powered email invitations effortlessly.
      </p>
      <Link href="/create-invitation">
        <button className="bg-blue-500 hover:bg-blue-600 text-black font-semibold py-2 px-4 rounded">
          Get Started
        </button>
      </Link>
    </div>
  );
}
