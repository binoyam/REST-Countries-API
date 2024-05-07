import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import MoonIcon from './assets/moon-icon.svg';
import SunIcon from './assets/sun-icon.svg';

const ThemeToggle = () => {
  const { darkTheme, toggleTheme } = useContext(ThemeContext);

  return (
    <div onClick={toggleTheme} className="theme_switch_div">
      <div className="icon">
        <img src={darkTheme ? MoonIcon : SunIcon} alt="Moon" />
      </div>
      <p className="mode">{darkTheme ? 'Dark Mode' : 'Light Mode'}</p>
    </div>
  );
};

export default ThemeToggle;
