import { NavLink, Outlet } from "react-router";

export default function ProfileLayout() {
  const tabs = [
    { to: "/profile/posts/grid", label: "Posts" },
    { to: "/profile/reels/grid", label: "Reels" },
    { to: "/profile/tagged/grid", label: "Tagged" },
    { to: "/profile/highlights", label: "Highlights" },
  ];

  return (
    <div className="max-w-screen-sm mx-auto">
      {/* Top Tabs */}
      <nav
        className="sticky top-0 z-10 bg-white/90 backdrop-blur border-b"
        aria-label="Profile sections"
      >
        <ul className="flex">
          {tabs.map((t) => (
            <li key={t.to} className="flex-1">
              <NavLink
                to={t.to}
                className={({ isActive }) =>
                  [
                    "block text-center py-3 sm:py-4 transition-colors",
                    "text-gray-500 hover:text-black",
                    isActive ? "font-semibold text-black border-b-2 border-black" : "border-b-2 border-transparent",
                  ].join(" ")
                }
                end={t.to === "/profile/highlights"}
              >
                {t.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Routed content */}
      <main className="p-3 sm:p-4">
        <Outlet />
      </main>
    </div>
  );
}