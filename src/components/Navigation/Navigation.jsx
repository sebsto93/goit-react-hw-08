import { Link } from "react-router-dom";
import AuthNav from "../AuthNav/AuthNav";
import UserNav from "../UserNav";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import ContactItem from "../ContactItem";

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <nav>
      <Link to="/">Home</Link>
      {isLoggedIn && <Link to="/contacts">Contacts</Link>}
      {isLoggedIn ? <UserNav /> : <AuthNav />}
    </nav>
  );
}
