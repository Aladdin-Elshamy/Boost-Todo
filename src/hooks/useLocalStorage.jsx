import { useState } from "react";

export default function useLocalStorage(key, initialValue) {
  // Retrieve the stored value from localStorage or use the initial value
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.warn(error);
      return initialValue;
    }
  });
  function setValue(value) {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.warn(error);
      setStoredValue(initialValue);
    }
  }
  return [storedValue, setValue];
}
