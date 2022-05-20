import google_play from "./../../public/Assets/google_play.png";
import apple_app_store from "./../../public/Assets/apple_app_store.png";
import Link from "@mui/material/Link";
import "./Footer.scss";

const Footer = () => {
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
    <>
      <div className="Footer">
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
    </>
  );
};

export default Footer;
