import { useState } from "react";

export default function Label({ region, handleFilterChange }) {
  const [checked, setChecked] = useState(false);

  const handleChange = (e) => {
    setChecked(!checked);
    handleFilterChange(e.target.value, e.target.checked);
  };
  return (
    <label className="inline-flex items-center">
      <input
        type="checkbox"
        className="form-checkbox"
        value={region}
        checked={checked}
        onChange={handleChange}
      />
      <span className="ml-2">{region}</span>
    </label>
  );
}
