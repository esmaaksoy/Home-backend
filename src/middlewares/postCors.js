const cors = require("cors");

const postCors = () => {
  const corsOptions = {
    origin: "*",
    methods: "POST",
  };

  return cors(corsOptions);

};

module.exports = postCors;
