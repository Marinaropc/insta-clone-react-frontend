export function Header() {
  return (
    <header className="sticky top-0 z-10 border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto flex h-12 max-w-screen-sm items-center justify-between px-4">
        <h1 className="text-lg font-semibold tracking-tight">Insta Clone</h1>

        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Create new post"
            className="inline-flex items-center gap-2 rounded-full bg-black px-3 py-1.5 text-sm font-medium text-white shadow-sm transition active:scale-[.98] hover:bg-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/50"
          >
            New
          </button>
        </div>
      </div>
    </header>
  );
}
