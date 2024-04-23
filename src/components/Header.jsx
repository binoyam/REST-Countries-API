import MoonIcon from '../assets/moon-icon.svg';

function Header() {
  return (
    <div className="header">
      <p className="header_txt">Where in the world?</p>
      <div className="theme_switch_div">
        <div className="icon">
          <img src={MoonIcon} alt="Moon" />
        </div>
        <p className="mode">Dark Mode</p>
      </div>
    </div>
  );
}

export default Header;
