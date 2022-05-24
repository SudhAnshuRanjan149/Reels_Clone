import insta from "./../../../public/Assets/insta_name_logo.png";
import "./Header.scss";

const Header = () => {
  return (
    <>
      <div className="Header">
        <img src={insta} alt="insta_logo" />
      </div>
    </>
  );
};
export default Header;
