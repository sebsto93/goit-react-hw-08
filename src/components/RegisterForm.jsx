import { useDispatch } from "react-redux";
import { register } from "../redux/auth/operations";

export default function RegisterForm() {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    const name = form.elements.name.value;
    console.log("Logging in with:", { email, password, name });

    dispatch(
      register({
        name,
        email,
        password,
      })
    );

    form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        username
        <input type="text" name="name" required />
      </label>
      <label>
        email
        <input type="email" name="email" required />
      </label>
      <label>
        password
        <input type="password" name="password" required />
      </label>
      <button type="submit">Login</button>
    </form>
  );
}
