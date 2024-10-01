// // components/BlogPost.js
// export default function BlogPost({ title, content }) {
//     return (
//       <div>
//         <h1>{title}</h1>
//         <p>{content}</p>
//       </div>
//     );
//   }


import React from 'react'

const BlogPost = ({title,content}) => {
  return (
    <div>
        <h1>{title}</h1>
        <p>{content}</p>
      </div>
  )
}

export default BlogPost

  