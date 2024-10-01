// pages/blog/index.js
import Link from 'next/link';

const blogPosts = [
  { title: 'First Blog Post', slug: 'first-post' },
  { title: 'Second Blog Post', slug: 'second-post' },
  // Add more blog posts as needed
];

export default function Blog() {
  return (  
    <div className='pt-20 px-6 md:px-16 lg:px-32 2xl:px-80'>
      <h1>Blog</h1>
      <ul className='overflow-hidden'>
        {blogPosts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`}>
              <div>{post.title}</div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
