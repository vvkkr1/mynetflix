import "./styles.scss";
import netflix from "../icons/netflix.svg";

function Header() {
  return (
    <div className="header">
      <div className="header-container">
        <div className="theme-netflix">
          <img
            className="theme"
            src="https://assets.nflxext.com/ffe/siteui/vlv3/c1366fb4-3292-4428-9639-b73f25539794/3417bf9a-0323-4480-84ee-e1cb2ff0966b/IN-en-20240408-popsignuptwoweeks-perspective_alpha_website_small.jpg"
            alt="logo"
          />
        </div>
        <div className="grad"></div>

        <div className="heading-form-container">
          <h1 className="headingOne">Unlimited movies, TV shows and more</h1>
        </div>

        <div className="left-container">
          <div className="netflixImg">
            <img src={netflix} alt="netflix-logo" />
          </div>
        </div>

        <div className="right-container">
          <div className="select-container">
            <select name="" id="" className="slt">
              <option value="">English</option>
              <option value="">Hindi</option>
            </select>
          </div>

          <div className="btn-container">
            <button className="btn">Sign In</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Header;
