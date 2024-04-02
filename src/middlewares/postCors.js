const cors = require("cors");

const postCors = () => {
  const corsOptions = {
    origin: "http://localhost:3000",
    methods: "POST",
  };

  return cors(corsOptions);

};

module.exports = postCors;
