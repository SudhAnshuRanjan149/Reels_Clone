import * as React from "react";
import Card from "@mui/material/Card";
import { Button } from "@mui/material";
import "./SignUp.scss";
import lock from "./../../public/Assets/lock-2.png";

import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import { useHistory } from "react-router-dom";

import Footer from "./Footer.js";
import Header from "./Header.js";

export default function ResetPassword() {
  let history = useHistory();

  return (
    <div className="signup_wrapper">
      <Header />
      <div className="signup_card">
        <Card className="card_body">
          <div className="logo">
            <img src={lock} alt="" />
          </div>
          <div className="bold_text">Trouble Logging In?</div>
          <div className="light_text">
            Enter your email, phone, or username and we'll send you a link to
            get back into your account.
          </div>

          <div className="inputs">
            <TextField
              size="small"
              className="text_field"
              id="filled-basic"
              label="Email, Phone, or Username"
              variant="filled"
            />
          </div>
          <Button variant="contained">Log in</Button>

          <Divider>OR</Divider>

          <div
            className="Create_new_account"
            onClick={() => history.push("./Signup")}
          >
            Create New Account
          </div>
        </Card>

        <Card className="card_body">
          <div
            className="back_to_login"
            onClick={() => history.push("./Login")}
          >
            Back To Login
          </div>
        </Card>
      </div>
      <Footer />
    </div>
  );
}
