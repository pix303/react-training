import React, { useState, useEffect } from "react";
import { useIsMounted } from "usehooks-ts";
import { Post, PostService } from "./Post.service";

function Posts() {
  // data to render as result
  const [posts, setPosts] = useState<Post[]>([]);
  // input by user to filter posts list
  const [currentId, setCurrentId] = useState<string>("");
  // to disable ui when in loading and trigger request
  const [isSending, setIsSending] = useState<boolean>(false);

  // to avoid update render after element is unmounted
  const isMounted = useIsMounted();

  const fetchAll = async () => {
    const res = await new PostService().getAll();
    if (isMounted()) {
      setPosts(res);
    }
  };
  const fetchById = async (id: number) => {
    const res = await new PostService().getPostById(id);
    if (isMounted()) {
      setPosts([res]);
    }
  };

  useEffect(() => {
    fetchAll();
  }, []);

  useEffect(() => {
    if (isSending) {
      if (!!currentId) {
        fetchById(parseInt(currentId));
      } else {
        fetchAll();
      }
      setIsSending(false);
    }
  }, [isSending]);

  return (
    <div data-testid="posts">
      <h1>Posts</h1>
      <input
        type="text"
        value={currentId}
        disabled={isSending}
        onChange={(e) => {
          setCurrentId(e.target.value);
        }}
      />
      <button disabled={isSending} onClick={(e) => setIsSending(true)}>
        Fetch post by id
      </button>
      <p>total: {posts?.length}</p>
      <ul data-testid="posts-list">
        {posts.map((post) => (
          <li title={post.body} key={post.id}>
            {post.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Posts;
