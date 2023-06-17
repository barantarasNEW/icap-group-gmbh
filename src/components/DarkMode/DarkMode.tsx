import { useEffect } from 'react';
import { MdDarkMode } from 'react-icons/md';
import { FiSun } from 'react-icons/fi';
import { useLocaleStorage } from '../../hooks/useLocaleStorage';
import './DarkMode.scss';

const DarkMode = () => {
  const [isDark, setIsDark] = useLocaleStorage<boolean>(false, "darkMode");

  const onClick = () => setIsDark((prev: boolean) => !prev);

  useEffect(() => {
    if (isDark) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <button className="dark-mode" onClick={onClick}>
      {isDark
        ? <FiSun  className="dark-mode__icon" />
        : <MdDarkMode className="dark-mode__icon" />}
    </button>
  );
};

export default DarkMode;