import React from "react";
import "./Login.scss";
import { Modal } from "../../components";
function Login() {
  return (
    <div class="totalbox border">
      <h2>Please Login</h2>
      <form class="loginForm" action="/action_page.php" method="post">
        <input placeholder="Email address" type="Email" required />
        <input placeholder="Password" type="password" required />
        <div class="boxcheckbox">
          <br />
          <button class="loginbtn">Login</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
