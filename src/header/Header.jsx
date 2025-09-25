import "./Header.scss";
import { navigationLinks } from "./HeaderData";
import NavigationLink from "./NavigationLink";

function Header() {
  return (
    <div className="container">
      <div className="navbar-block">
        <div className="navbar-block_div">
          <ul className="menu">
            {navigationLinks.map((link) => (
              <NavigationLink key={link.id} linkData={link} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
