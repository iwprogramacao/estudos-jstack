import React from 'react';

import Header from './Header';
import Post from './Post';

export default function App() {
  return (
    <>
      <Header title="JStack's Blog">
        <h2>Posts da Semana</h2>
      </Header>

      <hr />

      <Post
        likes={20}
        post={{ title: 'Titulo 01', subtitle: 'Subtitulo' }}
      />
      <Post
        likes={10}
        post={{ title: 'Titulo 02', subtitle: 'Subtitulo' }}
      />
      <Post
        likes={50}
        post={{ title: 'Titulo 03', subtitle: 'Subtitulo' }}
      />
    </>
  );
}
