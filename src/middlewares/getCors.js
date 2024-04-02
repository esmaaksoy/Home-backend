const cors = require("cors");

const getCors = () => {
  const corsOptions = {
    origin: "*",
    methods: "GET",
  };

  return cors(corsOptions)

};

module.exports = getCors;
