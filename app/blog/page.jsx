// // pages/blog/index.js
// import Link from 'next/link';

// const blogPosts = [
//   { title: 'First Blog Post', slug: 'first-post' },
//   { title: 'Second Blog Post', slug: 'second-post' },
//   // Add more blog posts as needed
// ];

// export default function Blog() {
//   return (  
//     <div>
//       <h1>Blog</h1>
//       <ul>
//         {blogPosts.map((post) => (
//           <li key={post.slug}>
//             <Link href={`/blog/${post.slug}`}>
//               <div>{post.title}</div>
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
