import React from 'react';
import PropTypes from 'prop-types';

export default function Post({ post, likes }) {
  return (
    <>
      <article>
        <strong>{post.title}</strong>

        <br />
        <small>{post.subtitle}</small>
        <br />
        Média:

        {likes / 2}
      </article>
      <br />
    </>
  );
}

Post.propTypes = {
  likes: PropTypes.number.isRequired,
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
  }).isRequired,
};
