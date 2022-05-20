import Card from "@mui/material/Card";
import { Button } from "@mui/material";
import "./SignUp.scss";
import insta from "./../../public/Assets/insta_name_logo.png";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import FacebookIcon from "@mui/icons-material/Facebook";
import { useHistory } from "react-router-dom";

import Footer from "./Footer.js";

const SignUp = () => {
  let history = useHistory();

  return (
    <div className="signup_wrapper">
      <div className="signup_card">
        <Card className="card_body">
          <div className="logo">
            <img src={insta} alt="" />
          </div>
          <h3>Sign up to see photos and videos from your friends.</h3>
          <Button startIcon={<FacebookIcon />} variant="contained">
            Log in with Facebook
          </Button>
          <Divider>OR</Divider>
          <div className="inputs">
            <TextField
              size="small"
              className="text_field"
              id="filled-basic"
              label="Mobile Number or Email"
              variant="filled"
            />
            <TextField
              size="small"
              className="text_field"
              id="filled-basic"
              label="Full Name"
              variant="filled"
            />
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
          <Button variant="contained" autoCapitalize="off">
            Sign up
          </Button>

          <h4>
            By signing up, you agree to our Terms , Data Policy and Cookies
            Policy .
          </h4>
        </Card>

        <Card className="card_body">
          <div>
            Have an account?
            <span className="link" onClick={() => history.push("./Login")}>
              {" "}
              Log in{" "}
            </span>
          </div>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default SignUp;
