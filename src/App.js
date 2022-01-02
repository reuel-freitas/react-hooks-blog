import { useCallback, useEffect, useState } from "react";
import { Input } from './Components/Input'

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
          <input type="search" onChange={handleSearchPost} placeholder="Type to search..." autoFocus style={{ marginTop: 20, width: 220, height: 30, padding: 10 }} />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr)', gap: 20, padding: 10 }}>
          {filteredPosts.filter((item, index) => index < postsLimit).map(post =>
            <Input key={post.id} post={post} />
          )}
          {filteredPosts.length === 0 &&
            <div style={{}}>
              <p style={{ color: '#eee' }}>Não foram encontrados posts com este filtro...</p>
            </div>
          }
        </div>
        {(filteredPosts.length === 0 || postsLimit < filteredPosts.length) &&
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: 20 }}>
            <button onClick={handlePostsLimit} style={{ maxWidth: 220, width: '100%', height: 30, padding: 3, borderRadius: 17 }}>Load more posts</button>
          </div>
        }
        {postsLimit === posts.length &&
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: 20 }}>
            <p>Não há mais posts =(</p>
          </div>
        }
      </section>
    </div>
  );
}

export default App;
