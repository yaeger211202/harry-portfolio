export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-white/[0.04]">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-[11px] font-mono text-white/15 tracking-wide">
          © 2025 Harekrishna (Harry) Kakadiya
        </p>
        <p className="text-[11px] font-mono text-white/15 tracking-wide">
          Built with Next.js · Tailwind CSS · Framer Motion
        </p>
      </div>
    </footer>
  );
}
