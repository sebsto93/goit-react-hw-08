import { useDispatch } from "react-redux";
import { logOut } from "../redux/auth/operations";

export default function UserNav() {
  const dispatch = useDispatch();
  const handleLoggOut = () => {
    dispatch(logOut());
  };
  return (
    <div>
      <p>Welcome, nazwaUsera</p>
      <button onClick={handleLoggOut}>Logout</button>
    </div>
  );
}
