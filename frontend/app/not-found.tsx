import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-content flex-col items-center px-6 py-32 text-center">
      <p className="font-display text-6xl text-coral">404</p>
      <h1 className="mt-4 font-display text-3xl text-ink">Page not found</h1>
      <p className="mt-3 text-ink/60">
        The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-ink px-6 py-3 text-sm text-cream hover:bg-coral"
      >
        Back to home
      </Link>
    </div>
  );
}
