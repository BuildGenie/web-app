import Link from "next/link";

export function LegalLinks() {
  return (
    <div className="footer-legal-links" aria-label="Legal information">
      <Link href="/privacy">Privacy</Link>
      <Link href="/cookies">Cookies</Link>
    </div>
  );
}
