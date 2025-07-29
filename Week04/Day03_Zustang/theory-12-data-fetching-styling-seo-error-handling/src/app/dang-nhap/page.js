import styles from '@/components/common/button/Button.module.css';

export default function page() {
  return (
    <>
      <form action="action_page.php" method="post" style={{ margin: "15px" }}>
        <h2>Login Form</h2>

        <div className="container">
          <label htmlFor="uname">
            <b>Username</b>
          </label>
          <input
            type="text"
            placeholder="Enter Username"
            name="uname"
            required
          />
          <br />

          <label htmlFor="psw">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            required
          />
          <br />

          <button type="submit" className={styles.btn}>
            Login
          </button>
        </div>
      </form>
    </>
  );
}
