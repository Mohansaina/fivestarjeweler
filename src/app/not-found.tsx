import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#070709] text-white flex flex-col items-center justify-center p-6 text-center space-y-6">
      <h2 className="text-4xl font-serif tracking-widest uppercase">Page Not Found</h2>
      <p className="text-xs text-zinc-400 font-light max-w-md">
        The requested salon page could not be located. Please return to the atelier homepage.
      </p>
      <Link
        href="/"
        className="px-8 py-3 bg-white text-black text-xs uppercase tracking-[0.2em] font-medium hover:bg-zinc-200 transition-colors"
      >
        Return to Atelier
      </Link>
    </div>
  );
}

