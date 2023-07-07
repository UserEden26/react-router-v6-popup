import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/">home</Link>
        <Link to="/hello">hello</Link>
      </nav>
    </header>
  );
};

export default Header;
