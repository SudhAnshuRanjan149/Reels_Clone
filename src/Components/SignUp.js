import Card from "@mui/material/Card";
import { Button } from "@mui/material";
import "./SignUp.scss";
import insta from "./../../public/Assets/insta_name_logo.png";
import google_play from "./../../public/Assets/google_play.png";
import apple_app_store from "./../../public/Assets/apple_app_store.png";

import Link from "@mui/material/Link";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import FacebookIcon from "@mui/icons-material/Facebook";
import { useHistory } from "react-router-dom";

const SignUp = () => {
  let history = useHistory();

  let link_arr = [
    "Meta",
    "About",
    "Blog",
    "Jobs",
    "Help",
    "API",
    "Privacy",
    "Terms",
    "Top Accounts",
    "Hashtags",
    "Locations",
    "Instagram Lite"
  ];
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

        <div>Get the app.</div>
        <div className="img_app_store">
          <img src={google_play} alt="" />
          <img src={apple_app_store} alt="" />
        </div>
      </div>
      <div className="links_arr">
        {link_arr.map((data) => {
          return (
            <Link className="link_arr_items" underline="none" href="#">
              {data}
            </Link>
          );
        })}
      </div>
      © 2022 Instagram from Meta
    </div>
  );
};

export default SignUp;
