import Link from "next/link";

export function NavMenuHeader() {
  return (
    <nav className="flex gap-3 text-card p-3">
      <Link href="/" className="uppercase">
        home
      </Link>
      <Link href="/#solutions" className="uppercase">
        solutions
      </Link>
      <Link href="/#resources" className="uppercase">
        resources
      </Link>
      <Link href="/#pricing" className="uppercase">
        pricing
      </Link>
      <Link href="/#about" className="uppercase">
        about us
      </Link>
    </nav>
  );
}
