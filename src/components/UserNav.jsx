import { useDispatch } from "react-redux";
import { logOut } from "../redux/auth/operations";
import { useSelector } from "react-redux";
import { selectUser } from "../redux/auth/selectors";

export default function UserNav() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const userName = user?.name || "";

  const handleLoggOut = () => {
    dispatch(logOut());
  };

  return (
    <div>
      <p>Welcome, {userName}</p> <button onClick={handleLoggOut}>Logout</button>
    </div>
  );
}
