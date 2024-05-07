import ThemeToggle from '../ThemeToggle';
import './Header.css';
import { ThemeContext } from '../ThemeContext';
import { useContext } from 'react';

function Header() {
  const { darkTheme } = useContext(ThemeContext);
  return (
    <div className={`header ${darkTheme ? '' : 'light_mode_header'}`}>
      <p className="header_txt">Where in the world?</p>
      <ThemeToggle />
    </div>
  );
}

export default Header;
