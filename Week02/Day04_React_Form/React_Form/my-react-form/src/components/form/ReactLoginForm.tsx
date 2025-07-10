import { useState, type ChangeEvent } from "react";
import { MESSAGE_ERROR, REGEX } from "../../constants/LoginFormConstant";

function ReactLoginForm() {
  const [user, setUser] = useState({
    email: { value: "", error: "" },
    password: { value: "", error: "" },
  });

  function handleChange(event: ChangeEvent<HTMLInputElement>): void {
    const name = event.target.name as keyof typeof REGEX;
    const error = REGEX[name].test(event.target.value)
      ? ""
      : MESSAGE_ERROR[name];

    console.log(error);

    setUser({
      ...user,
      [event.target.name]: { value: event.target.value, error: error },
    });
    console.log(`User: ${JSON.stringify(user)}`);
  }

  return (
    <form action="">
      <h2>Login</h2>
      <div
        className={`custom-input ${
          user.email && user.email.error && "custom-input-error"
        }`}
      >
        <label htmlFor="email">Username</label>
        <input
          type="text"
          placeholder="Enter email"
          id="email"
          name="email"
          onChange={handleChange}
        />
        {user.email && user.email.error && (
          <p className="error" style={{ color: "red" }}>
            Invalid Email
          </p>
        )}
      </div>
      <br />


      <label htmlFor="password">Password</label>
      <div
        className={`custom-input ${
          user.password && user.password.error && "custom-input-error"
        }`}
      ></div>
      <input
        type="password"
        placeholder="Enter your password"
        id="password"
        name="password"
        onChange={handleChange}
      />
      {user.password && user.password.error && (
        <p className="error" style={{ color: "red" }}>
          Invalid Password
        </p>
      )}
      <br />
      <input type="submit" value={"Login"} />
    </form>
  );
}

export default ReactLoginForm;
