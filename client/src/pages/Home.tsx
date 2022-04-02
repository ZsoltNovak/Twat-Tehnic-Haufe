import Button from "common/components/Button";
import { useNavigate } from "react-router-dom";

const welcomeImage: string = require("assets/pngs/welcomeImage.png");

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="content-width">
      <div className="flex flex-col justify-between items-center md:flex-row ">
        <div className="drop-shadow-xl">
          <h1 className="text-center text-xl md:text-5xl shadow-black drop-shadow-xl">
            Welcome to the Test Tehnic Haufen Website
          </h1>
        </div>
        <img src={welcomeImage} alt="Welcome" />
      </div>
      <div className="flex flex-col justify-center items-center py-10">
        <p className="text-center text-xl shadow-black drop-shadow-xl">
          In order to use this amazing service, please{" "}
          <span className="text-gray-600 text-2xl">Register</span> or if you
          already have an account, please press the{" "}
          <span className="text-gray-600 text-2xl">Login</span> button.
        </p>
        <div className="flex flex-col py-10 drop-shadow-lg md:flex-row">
          <div className="px-10 pb-10">
            <Button
              children="Register"
              buttonColor={"808080"}
              clickFunction={() => navigate("/register")}
            />
          </div>
          <div className="px-10 text-center">
            <Button children="Login" buttonColor={"808080"} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
