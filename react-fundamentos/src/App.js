import React, { useState } from 'react';

import Header from './Header';
import Post from './Post';

export default function App() {
  const [posts, setPosts] = useState([
    {
      id: Math.random(), title: 'Title #01', subtitle: 'Subtitle #01', likes: 20, read: false,
    },
    {
      id: Math.random(), title: 'Title #02', subtitle: 'Subtitle #02', likes: 10, read: true,
    },
    {
      id: Math.random(), title: 'Title #03', subtitle: 'Subtitle #03', likes: 50, read: false,
    },
    {
      id: Math.random(), title: 'Title #04', subtitle: 'Subtitle #04', likes: 20, read: false,
    },
  ]);

  function handleRefresh() {
    setPosts((prevState) => [
      ...prevState,
      {
        id: Math.random(),
        title: `Title #0${prevState.length + 1}`,
        subtitle: `Subtitle #0${prevState.length + 1}`,
        likes: 20,
        read: false,
      },
    ]);
  }

  function handleRemovePost(postId) {
    setPosts((prevState) => (
      prevState.filter((post) => post.id !== postId);
    ));
  }

  return (
    <>
      <Header title="JStack's Blog">
        <h2>
          Posts da Semana
          <button type="button" onClick={handleRefresh}>Atualizar</button>
        </h2>
      </Header>

      <hr />

      {posts.map((post) => (
        <Post
          key={post.id}
          onRemove={handleRemovePost}
          post={post}
        />
      ))}
    </>
  );
}
