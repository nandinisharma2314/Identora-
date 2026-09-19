export default function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-ink text-cream/70">
      <div className="mx-auto flex max-w-content flex-col gap-4 px-6 py-10 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p className="font-display text-lg text-cream">Harshika Jain</p>
        <p>Digital Marketer &amp; Creative Designer — Jaipur, India</p>
        <p>© {new Date().getFullYear()} Identora. All rights reserved.</p>
      </div>
    </footer>
  );
}
