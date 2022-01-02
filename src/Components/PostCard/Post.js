export const Post = ({ post }) => {
    return (
        <div style={{ backgroundColor: '#6e6e6e6e', padding: 10, borderRadius: 7 }}>
            <img src={post.cover} alt="Imagem do post" style={{ maxWidth: '100%', borderRadius: 7 }} />
            <h3 style={{ color: '#eee', textAlign: 'left' }}>{post.title}</h3>
            <p style={{ color: '#eee', textAlign: 'left' }}>{post.body}</p>
        </div>
    )
}