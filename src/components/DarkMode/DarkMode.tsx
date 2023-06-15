import { useState } from 'react';
import { MdDarkMode } from 'react-icons/md';
import { FiSun } from 'react-icons/fi';
import './DarkMode.scss';

const DarkMode = () => {
  const [isDark, setIsDark] = useState(false);

  const onClick = () => setIsDark(prev => {
    if (prev) {
      document.body.classList.remove("dark");

      return false;
    }

    document.body.classList.add("dark");

    return true;
  });

  return (
    <button className="dark-mode" onClick={onClick}>
      {isDark
        ? <FiSun  className="dark-mode__icon" />
        : <MdDarkMode className="dark-mode__icon" />}
    </button>
  );
};

export default DarkMode;