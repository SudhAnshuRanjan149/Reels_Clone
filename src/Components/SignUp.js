import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import "./SignUp.scss";
import insta from "./../../public/Assets/insta_name_logo.png";

import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import FacebookIcon from "@mui/icons-material/Facebook";

export default function SignUp() {
  return (
    <div className="signup_wrapper">
      <div className="signup_card">
        <Card className="card_body">
          <div className="logo">
            <img src={insta} alt="" />
          </div>
          <h3>Sign up to see photos and videos from your friends.</h3>
          <Button
            fullWidth={true}
            startIcon={<FacebookIcon />}
            variant="contained"
          >
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
          <Button fullWidth={true} variant="contained" autoCapitalize="off">
            Sign up
          </Button>
        </Card>
      </div>
    </div>
  );
}
