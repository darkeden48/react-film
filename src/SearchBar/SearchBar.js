import { useState } from "react";

export default function SearchBar({ onSubmit }) {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value.trim());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(search);
    reset();
  };

  const reset = () => {
    setSearch("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input name="movie" value={search} onChange={handleChange} />
      </label>
      <button type="submit">Search</button>
    </form>
  );
}
