// components/BlogLayout.js
import Link from 'next/link';

export default function BlogLayout({ children }) {
  return (
    <div>
      <header>
        <Link href="/blog">
          <div>Blog Home</div>
        </Link>
      </header>
      <main>{children}</main>
    </div>
  );
}
