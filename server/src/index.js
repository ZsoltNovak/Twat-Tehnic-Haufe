const Hapi = require("@hapi/hapi");

// Reading our data set from zipcodes.json
const fs = require("fs");
const zipcodesData = fs.readFileSync("zipcodes.json");
const zipcodes = JSON.parse(zipcodesData);

const init = async () => {
  // Initiating the Server
  const server = Hapi.server({
    port: 3001,
    host: "localhost",
  });

  // Connecting to MongoDB
  await server.register({
    plugin: require("hapi-mongodb"),
    options: {
      url: "mongodb+srv://user:ZXp7QALSSpH3saHz123@cluster0.ffnxh.mongodb.net/haufenDB?retryWrites=true&w=majority",
      settings: {
        useUnifiedTopology: true,
      },
      decorate: true,
    },
  });

  // Checking if the connection with the MongoDB is working
  server.route({
    method: "GET",
    path: "/connection",
    handler: (req, h) => {},
  });

  // Get all zipcodes
  server.route({
    method: "GET",
    path: "/zipcodes",
    handler: async (req, h) => {
      const offset = Number(req.query.offset) || 0;
      const zipcodes = await req.mongo.db
        .collection("zipcodes")
        .find({})
        .sort({ pop: -1 })
        .skip(offset)
        .limit(20)
        .toArray();
      console.log(zipcodes);
      return zipcodes;
    },
  });

  // Add multiple zipcodes to the database
  server.route({
    method: "POST",
    path: "/zipcodes",
    handler: async (req, h) => {
      const payload = zipcodes;
      const status = await req.mongo.db
        .collection("zipcodes")
        .insertMany(payload);
      return status;
    },
  });

  // Executing aggregation based on average city population by state
  server.route({
    method: "GET",
    path: "/population",
    handler: (req, h) => {
      const population = req.mongo.db.collection("zipcodes").aggregate([
        {
          $group: {
            _id: { state: "$state", city: "$city" },
            pop: { $sum: "$pop" },
          },
        },
        { $group: { _id: "$_id.state", avgCityPop: { $avg: "$pop" } } },
      ]);
      console.log(population);
      return population;
    },
  });

  // Starting the Server
  await server.start();
  console.log("Server running on %s", server.info.uri);
};

init();
