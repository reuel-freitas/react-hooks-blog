import { useCallback, useEffect, useState } from "react";
import { Button } from "./Components/Button/Button";
import { Input } from './Components/Input/Input'
import { Post } from "./Components/PostCard/Post";
import { Warning } from "./Components/Warning/Warning";

function App() {
  const [posts, setPosts] = useState([])
  const [postsLimit, setPostsLimit] = useState(10)
  const [searchValue, setSearchValue] = useState('')

  const loadPosts = useCallback(async (postsLimit) => {
    const postsResponse = fetch('https://jsonplaceholder.typicode.com/posts')
    const photosResponse = fetch('https://jsonplaceholder.typicode.com/photos')

    const [posts, photos] = await Promise.all([postsResponse, photosResponse])

    const postsJson = await posts.json()
    const photosJson = await photos.json()

    const postsAndPhotos = postsJson.map((post, index) => { return { ...post, cover: photosJson[index].url } })
    setPosts(postsAndPhotos)
  }, [])

  useEffect(() => {
    loadPosts(postsLimit)
  }, [loadPosts, postsLimit])

  const handlePostsLimit = () => {
    setPostsLimit(postsLimit + 10)
  }

  const handleSearchPost = ({ target }) => {
    const { value } = target;
    setSearchValue(value)
  }

  let filteredPosts = !!searchValue ? posts.filter(post => post.title.toLowerCase().includes(searchValue)) : posts

  return (
    <div style={{ width: '100%', height: '100%', backgroundColor: '#1e1e1e', }}>
      <section style={{ width: '100%', height: 'auto' }}>
        <div style={{ padding: 10 }}>
          <h2 style={{ color: '#eee' }}>Search for posts</h2>
          <Input handleSearchPost={handleSearchPost} />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr)', gap: 20, padding: 10 }}>
          {filteredPosts.filter((item, index) => index < postsLimit).map(post =>
            <Post key={post.id} post={post} />
          )}
          {filteredPosts.length === 0 &&
            <Warning warning="Não foram encontrados posts com este filtro..." />
          }
        </div>
        {(filteredPosts.length === 0 || postsLimit < filteredPosts.length) &&
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: 20 }}>
            <Button onClick={handlePostsLimit} description="Load more posts" />
          </div>
        }
        {postsLimit === posts.length &&
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: 20 }}>
            <Warning warningMsg="Não há mais posts =(" />
          </div>
        }
      </section>
    </div>
  );
}

export default App;
