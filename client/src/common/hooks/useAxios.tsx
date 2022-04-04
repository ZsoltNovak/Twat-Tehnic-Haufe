import axios from "axios";

import {
  addDummyDataRoute,
  aggregateDummyDataRoute,
} from "api-config/api-routes";

const useAxios = () => {
  const addDataRoute = addDummyDataRoute;
  const aggregateDataRoute = aggregateDummyDataRoute;

  // Generate Dummy Data using zipcodes data set
  const generateData = () => {
    axios
      .post(addDataRoute)
      .then((res) => {
        console.log(res);
        window.alert("Data has been generated!");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Aggregates zipcodes data. Aggregation based on average city population by state.
  const aggregateData = () => {
    axios
      .post(aggregateDataRoute)
      .then((res) => {
        console.log(res);
        window.alert("Data has been aggregated!");
        return res;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const aggregation = aggregateData();

  return { generateData, aggregateData };
};

export default useAxios;
