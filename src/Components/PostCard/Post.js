export const Post = ({ cover, title, body }) => {
    return (
        <div style={styles.postContainer}>
            <img src={cover} alt={title} style={styles.postCover} />
            <h3 style={styles.postText}>{title}</h3>
            <p style={styles.postText}>{body}</p>
        </div>
    )
}

const styles = {
    postContainer: { backgroundColor: '#6e6e6e6e', padding: 10, borderRadius: 7 },
    postCover: { maxWidth: '100%', borderRadius: 7 },
    postText: { color: '#eee', textAlign: 'left' }
}