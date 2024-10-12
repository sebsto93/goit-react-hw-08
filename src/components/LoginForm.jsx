import { useDispatch } from "react-redux";
import { logIn } from "../redux/auth/operations";

export default function LoginForm() {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    dispatch(
      logIn({
        email,
        password,
      })
    );

    form.reset();
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        email
        <input type="email" name="email" />
      </label>
      <label>
        password
        <input type="password" name="password" />
      </label>
      <button type="submit">Login</button>
    </form>
  );
}
