import Button from "common/components/Button";
import InputField from "common/components/InputField";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <div className="w-screen h-screen bg-[#808080] flex flex-col justify-center items-center">
      <div className="w-2/4 h-2/4 bg-white rounded-lg flex flex-col justify-center items-center shadow-black drop-shadow-xl">
        <h1 className="font-semibold text-center text-xl md:text-5xl shadow-black drop-shadow-xl pb-10">
          REGISTER
        </h1>
        <div className="flex flex-col justify-center items-center">
          <InputField inputLabel="E-mail" inputType="text" />
          <InputField inputLabel="Password" inputType="text" />
        </div>
        <p className="py-10">
          Already have an account?{" "}
          <Link to="/" className="text-gray-600 text-2xl">
            Login
          </Link>{" "}
          here.
        </p>
        <div className="px-10">
          <Button children="Register" buttonColor="808080" />
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
