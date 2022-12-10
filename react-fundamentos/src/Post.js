import React from 'react';
import PropTypes from 'prop-types';
import PostHeader from './PostHeader';
import styles from './Post.scss';

export default function Post({ post, onRemove }) {
  return (
    <article className={post.removed ? styles.postRemoved : styles.post}>
      <PostHeader
        onRemove={onRemove}
        post={{
          id: post.id,
          title: post.title,
          read: post.read,
        }}
      />
      <small>{post.subtitle}</small>
      <br />
      Média:
      {post.likes / 2}
    </article>
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
    removed: PropTypes.bool.isRequired,
  }).isRequired,
};
