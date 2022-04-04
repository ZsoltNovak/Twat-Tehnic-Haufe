import axios from "axios";

import { addDummyDataRoute } from "api-config/api-routes";

const useAxios = () => {
  const route = addDummyDataRoute;

  const fetchData = () => {
    axios
      .post(route)
      .then((res) => {
        console.log(res);
        window.alert("Data has been generated!");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return { fetchData };
};

export default useAxios;
