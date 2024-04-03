const cors = require("cors");

const getCors = () => {
  const corsOptions = {
    origin: "http://localhost:3000/",
    methods: "GET",
  };

  return cors(corsOptions)

};

module.exports = getCors;
