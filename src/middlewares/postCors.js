const cors = require("cors");

const postCors = () => {
  const corsOptions = {
    origin: "*",
    methods: "POST",
  };

  cors(corsOptions);

};

module.exports = postCors;
