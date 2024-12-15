import React from "react";
import type { Post } from "../types/post";

interface Props {
  post: Post;
  onLike: (id: string) => void;
  onComment: (id: string, comment: string) => void;
}

const Posts: React.FC<Props> = ({ post, onLike, onComment }) => {
  return (
    <div className="p-4 mb-4 bg-white border rounded-lg">
      <h2 className="font-bold">{post.author}</h2>
      <p className="my-2">{post.content}</p>
      <div className="flex items-center justify-between text-sm text-gray-600">
        <button onClick={() => onLike(post.id)}>❤️ {post.likes} Likes</button>
        <span>{new Date(post.createdAt).toLocaleString()}</span>
      </div>
      <div className="mt-4">
        <input
          type="text"
          placeholder="Add a comment..."
          className="w-full px-2 py-1 border rounded-lg"
          onKeyDown={(e) => {
            if (e.key === "Enter")
              onComment(post.id, (e.target as HTMLInputElement).value);
          }}
        />
        <ul className="mt-2 text-sm">
          {post.comments.map((comment, idx) => (
            <li key={`${post.id}-${comment}-${idx}`} className="pt-2 border-t">
              {comment}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Posts;
