import Button from "common/components/Button";

const welcomeImage: string = require("assets/pngs/welcomeImage.png");

const Home = () => {
  return (
    <div className="content-width">
      <div className="flex flex-col justify-between items-center md:flex-row ">
        <div className="drop-shadow-xl">
          <h1 className="text-center text-xl md:text-5xl">
            Welcome to the Test Tehnic Haufen Website
          </h1>
        </div>
        <img src={welcomeImage} alt="Welcome" />
      </div>
      <div className="flex flex-col justify-center items-center py-10">
        <p className="text-center text-xl">
          In order to use this amazing service, please Register or if you
          already have an account, please press the Login button.
        </p>
        <div className="flex flex-col py-10 drop-shadow-lg md:flex-row">
          <div className="px-10 pb-10">
            <Button children="Register" buttonColor={"808080"} />
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
