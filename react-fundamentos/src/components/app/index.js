import React, { useState } from 'react';
import Header from '../Header';
import Post from '../Posts';
import ThemeProvider from '../../contexts/ThemeContext';
import { Title } from './styles';

export default function App() {
  const [posts, setPosts] = useState([
    {
      id: Math.random(), title: 'Title #01', subtitle: 'Subtitle #01', likes: 20, read: false, removed: false,
    },
    {
      id: Math.random(), title: 'Title #02', subtitle: 'Subtitle #02', likes: 10, read: true, removed: false,
    },
    {
      id: Math.random(), title: 'Title #03', subtitle: 'Subtitle #03', likes: 50, read: false, removed: false,
    },
    {
      id: Math.random(), title: 'Title #04', subtitle: 'Subtitle #04', likes: 20, read: false, removed: false,
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
    setPosts((prevState) => prevState.map((post) => (
      post.id === postId
        ? { ...post, removed: true }
        : post)));
  }

  return (
    <ThemeProvider>
      <Header title="JStack's Blog">
        <Title as="h2">
          Posts da Semana
          <button type="button" onClick={handleRefresh}>Atualizar</button>
        </Title>
      </Header>

      <hr />

      {posts.map((post) => (
        <Post
          key={post.id}
          onRemove={handleRemovePost}
          post={post}
        />
      ))}
    </ThemeProvider>
  );
}
