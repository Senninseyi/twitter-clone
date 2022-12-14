import React, { useState } from "react";

export const DarkMode = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <button onClick={() => toggleDarkMode()}>toggle</button>
    </>
  );
};
