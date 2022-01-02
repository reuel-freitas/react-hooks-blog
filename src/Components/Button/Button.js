export const Button = ({ onClick, description }) => (
    <button onClick={onClick} style={{ maxWidth: 220, width: '100%', height: 30, padding: 3, borderRadius: 17 }}>{description}</button>
)