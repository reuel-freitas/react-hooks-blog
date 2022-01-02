export const Button = ({ onClick, description, disabled }) => (
    <button
        onClick={onClick}
        style={styles.button}
        disabled={disabled}
    >
        {description}
    </button>
)

const styles = {
    button: {
        maxWidth: 220,
        width: '100%',
        height: 30,
        padding: 3,
        borderRadius: 17
    }
}