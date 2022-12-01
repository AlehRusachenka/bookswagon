import { useState, useEffect } from "react";

function useStarRating(defaultValue, key) {
  const [value, setValue] = useState(() => {
    const starsValue = window.localStorage.getItem(key);
    return starsValue !== null ? JSON.parse(starsValue) : defaultValue;
  });
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
export default useStarRating;
