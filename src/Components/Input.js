export const Input = ({ handleSearchPost }) => (
    <input type="search" onChange={handleSearchPost} placeholder="Type to search..." autoFocus style={{ marginTop: 20, width: 220, height: 30, padding: 10 }} />
)
