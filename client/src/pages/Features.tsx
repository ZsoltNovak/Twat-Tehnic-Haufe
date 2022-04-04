import React from "react";
import { useNavigate } from "react-router-dom";

import Button from "common/components/Button";
import useAxios from "common/hooks/useAxios";

const dataImage: string = require("assets/pngs/dataImage.png");

const Features = () => {
  const { fetchData } = useAxios();

  return (
    <div className="content-width">
      <div className="flex flex-col justify-between items-center md:flex-row ">
        <div className="drop-shadow-xl flex flex-col justify-center align-center">
          <h1 className="text-center text-xl pb-10 md:text-5xl shadow-black drop-shadow-xl">
            Want to generate some awesome new data? Click on the Button below.
          </h1>
          <Button
            children="Add Data"
            buttonColor={"808080"}
            clickFunction={fetchData}
          />
        </div>
        <img src={dataImage} alt="Welcome" />
      </div>
    </div>
  );
};

export default Features;
