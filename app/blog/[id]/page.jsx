import fs from 'fs';
import path from 'path';

// This function generates the dynamic paths for each blog post
export async function generateStaticParams() {
  // Load the blog post data from the JSON file
  const filePath = path.join(process.cwd(), 'data', 'posts.json');
  const posts = JSON.parse(fs.readFileSync(filePath, 'utf8'));

  // Map the posts to return an array of params for each blog post
  return posts.map((post) => ({
    id: post.id.toString(), // Ensure the ID matches your URL pattern
  }));
}

// The actual blog post page component
export default async function BlogPost({ params }) {
  // Load the blog post data from JSON
  const filePath = path.join(process.cwd(), 'data', 'posts.json');
  const posts = JSON.parse(fs.readFileSync(filePath, 'utf8'));

  // Find the blog post based on the ID from the params
  const post = posts.find((post) => post.id === params.id);

  if (!post) {
    return <h1>Post Not Found</h1>;
  }

  return (
    <div className='pt-20 px-6 md:px-16 lg:px-32 2xl:px-80'>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}
