from pathlib import Path
import re

page_path = Path("app/page.tsx")
css_path = Path("app/globals.css")
page = page_path.read_text(encoding="utf-8")
css = css_path.read_text(encoding="utf-8")
css_append = Path("app.globals.css.append").read_text(encoding="utf-8")

if 'import { SiteHeader } from "@/components/site-header";' not in page:
    page = page.replace(
        'import Link from "next/link";\n',
        'import Link from "next/link";\nimport { SiteHeader } from "@/components/site-header";\n',
        1,
    )

for unused_import in ["  ArrowRight,\n", "  AudioLines,\n", "  ChevronRight,\n", "  Menu,\n"]:
    page = page.replace(unused_import, "")

page, count = re.subn(
    r'      <header className="site-header">.*?      </header>\n',
    '      <SiteHeader />\n',
    page,
    count=1,
    flags=re.DOTALL,
)
if count != 1:
    raise SystemExit("Expected homepage header block not found. No files were written.")

page = page.replace(
    'Link href="#contact" className="card-link"',
    'Link href="/services" className="card-link"',
    1,
)
page = page.replace(
    'Link href="#contact" className="button button-orange">Explore growth services',
    'Link href="/services#marketing-growth" className="button button-orange">Explore growth services',
    1,
)

footer_old = '<div><span>EXPLORE</span><Link href="#what-we-do">What we do</Link><Link href="#approach">Our approach</Link><Link href="#ventures">Ventures</Link></div>'
footer_new = '<div><span>EXPLORE</span><Link href="/services">Services</Link><Link href="#approach">Our approach</Link><Link href="#ventures">Ventures</Link></div>'
page = page.replace(footer_old, footer_new, 1)

if "/* Shared responsive navigation */" not in css:
    css += "\n" + css_append

page_path.write_text(page, encoding="utf-8")
css_path.write_text(css, encoding="utf-8")
print("Homepage and styles updated.")
