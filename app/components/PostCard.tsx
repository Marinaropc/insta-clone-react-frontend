import type { Post } from "~/schemas/post.schema";

export function PostCard({ post }: { post: Post }) {
  return (
    <div className='w-full max-w-lg mx-auto rounded-lg overflow-hidden border bg-white mb-6 shadow-sm hover:shadow-md transition-shadow duration-300'>
      <div className='p-4 flex items-center justify-between'>
        <p className='font-bold text-gray-800 text-sm'>webeet_user</p>
      </div>
      <img
        src={post.img_url}
        alt={post.caption || "Instagram post"}
        className='w-full h-auto aspect-square object-cover transition-transform duration-300 hover:scale-[1.01]'
      />
      <div className='p-4 text-sm text-gray-700'>
        <p>
          <span className='font-bold mr-2 text-gray-800'>webeet_user</span>
          {post.caption}
        </p>
      </div>
    </div>
  );
}