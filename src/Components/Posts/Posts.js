import React from 'react';
import { Post } from '../PostCard/Post';
import P from 'prop-types';
import { Warning } from '../Warning/Warning';

export const Posts = ({ posts = [], postsLimit }) => (
  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr)', gap: 20, padding: 10 }}>
    {posts
      .filter((item, index) => index < postsLimit)
      .map(({ id, cover, title, body }) => (
        <Post key={id} cover={cover} title={title} body={body} />
      ))}
    {!posts.length > 0 && <Warning msg="Não foram encontrados posts com este filtro..." />}
  </div>
);

Posts.propTypes = {
  posts: P.arrayOf(
    P.shape({
      title: P.string.isRequired,
      cover: P.string.isRequired,
      body: P.string.isRequired,
    }),
  ),
  postsLimit: P.number.isRequired,
};
