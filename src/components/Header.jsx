import ThemeToggle from '../ThemeToggle';
import './Header.css';
function Header() {
  return (
    <div className="header">
      <p className="header_txt">Where in the world?</p>
      <ThemeToggle />
    </div>
  );
}

export default Header;
