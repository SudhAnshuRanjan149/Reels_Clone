import * as React from "react";
import Card from "@mui/material/Card";
import { Button } from "@mui/material";
import "./SignUp.scss";
import insta from "./../../../public/Assets/insta_name_logo.png";

import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import FacebookIcon from "@mui/icons-material/Facebook";
import { useHistory } from "react-router-dom";

import Footer from "./../Common/Footer.js";

export default function Login() {
  let history = useHistory();

  return (
    <div className="signup_wrapper">
      <div className="signup_card">
        <Card className="card_body">
          <div className="logo">
            <img src={insta} alt="" />
          </div>

          <div className="inputs">
            <TextField
              size="small"
              className="text_field"
              id="filled-basic"
              label="Username"
              variant="filled"
            />
            <TextField
              size="small"
              className="text_field"
              id="filled-basic"
              label="Password"
              variant="filled"
            />
          </div>
          <Button variant="contained">Log in</Button>

          <Divider>OR</Divider>

          <div className="login_with_fb">
            <div>
              <FacebookIcon />
            </div>
            <div>Log in with Facebook</div>
          </div>

          <h4
            className="forgot_password"
            onClick={() => history.push("./ResetPassword")}
          >
            Forgot Password?
          </h4>
        </Card>

        <Card className="card_body">
          <div>
            Don't have an account?
            <span className="link" onClick={() => history.push("./Signup")}>
              {" "}
              Sign up{" "}
            </span>
          </div>
        </Card>
      </div>
      <Footer />
    </div>
  );
}
