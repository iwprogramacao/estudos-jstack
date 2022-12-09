import React from 'react';
import PropTypes from 'prop-types';

export default function Post({ post, onRemove }) {
  return (
    <>
      <article>
        <strong>{post.read ? <s>{post.title}</s> : post.title }</strong>
        <button type="button" onClick={() => onRemove(post.id)}>Remover</button>
        <br />
        <small>{post.subtitle}</small>
        <br />
        Média:
        {post.likes / 2}
      </article>
      <br />
    </>
  );
}

Post.propTypes = {
  onRemove: PropTypes.func.isRequired,
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    read: PropTypes.bool.isRequired,
  }).isRequired,
};
