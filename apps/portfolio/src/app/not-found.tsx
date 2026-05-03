import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black text-white">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="mt-2 text-gray-400">This page could not be found.</p>
      <Link
        href="/"
        className="mt-6 rounded-lg bg-white/10 px-4 py-2 hover:bg-white/20"
      >
        Back to home
      </Link>
    </div>
  );
}
