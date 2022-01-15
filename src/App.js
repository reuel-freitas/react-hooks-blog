import React, { useCallback, useEffect, useState } from 'react';
import { Button } from './Components/Button/Button';
import { Input } from './Components/Input/Input';
import { Posts } from './Components/Posts/Posts';
import { Warning } from './Components/Warning/Warning';

function App() {
  const [posts, setPosts] = useState([]);
  const [postsLimit, setPostsLimit] = useState(10);
  const [searchValue, setSearchValue] = useState('');

  const loadPosts = useCallback(async () => {
    const postsResponse = fetch('https://jsonplaceholder.typicode.com/posts');
    const photosResponse = fetch('https://jsonplaceholder.typicode.com/photos');

    const [posts, photos] = await Promise.all([postsResponse, photosResponse]);

    const postsJson = await posts.json();
    const photosJson = await photos.json();

    const postsAndPhotos = postsJson.map((post, index) => {
      return { ...post, cover: photosJson[index].url };
    });
    setPosts(postsAndPhotos);
  }, []);

  useEffect(() => {
    loadPosts(postsLimit);
  }, [loadPosts, postsLimit]);

  const handlePostsLimit = () => {
    setPostsLimit(postsLimit + 10);
  };

  const handleSearchPost = ({ target }) => {
    const { value } = target;
    setSearchValue(value);
  };

  let filteredPosts = searchValue ? posts.filter((post) => post.title.toLowerCase().includes(searchValue)) : posts;

  return (
    <div style={{ width: '100%' }}>
      <section style={{ width: '100%', height: 'auto' }}>
        <div style={{ padding: 10 }}>
          <h2 style={{ color: '#eee' }}>Search for posts</h2>
          <Input handleChange={handleSearchPost} searchValue={searchValue} />
        </div>
        <Posts posts={filteredPosts} postsLimit={postsLimit} />
        <div style={styles.button}>
          <Button onClick={handlePostsLimit} description="Load more posts" disabled={filteredPosts.length === 0} />
        </div>
        {postsLimit === posts.length && (
          <div style={styles.warningSection}>
            <Warning msg="Não há mais posts =(" />
          </div>
        )}
      </section>
    </div>
  );
}

const styles = {
  button: { display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: 20 },
  warningSection: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
};

export default App;
