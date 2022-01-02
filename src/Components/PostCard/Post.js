export const Post = ({ cover, title, body }) => {
    return (
        <div style={{ backgroundColor: '#6e6e6e6e', padding: 10, borderRadius: 7 }}>
            <img src={cover} alt={title} style={{ maxWidth: '100%', borderRadius: 7 }} />
            <h3 style={{ color: '#eee', textAlign: 'left' }}>{title}</h3>
            <p style={{ color: '#eee', textAlign: 'left' }}>{body}</p>
        </div>
    )
}