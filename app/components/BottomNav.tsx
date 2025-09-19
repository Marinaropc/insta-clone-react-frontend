import { Link } from "react-router";

export function BottomNav() {
  return (
    <footer className="fixed bottom-0 left-0 z-50 w-full h-16 bg-white/90 backdrop-blur border-t shadow-sm">
      <div className="grid h-full max-w-lg grid-cols-5 mx-auto font-medium text-gray-700">
        <Link
          to="/home"
          className="inline-flex flex-col items-center justify-center px-5 hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
        >
          🏠
        </Link>
        <div className="inline-flex flex-col items-center justify-center px-5 hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500">
          🔍
        </div>
        <Link
          to="/create" 
          className="inline-flex flex-col items-center justify-center px-5 hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
        >
          ➕
        </Link>
        <Link
          to="/"
          className="inline-flex flex-col items-center justify-center px-5 hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
        >
          Reels
        </Link>
        <Link
          to="/profile"
          className="inline-flex flex-col items-center justify-center px-5 hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
        >
          👤
        </Link>
      </div>
    </footer>
  );
}