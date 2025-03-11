import { useState } from "react";

export function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  function handleChange(event) {
    setValue(event.target.value);
  }

  const inputProps = {
    value,
    onChange: handleChange,
  };

  return inputProps;
}
