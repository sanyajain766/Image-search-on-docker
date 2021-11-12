const axios = require("axios");
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.get("/photos", function (req, res) {
  var query = req.query.query;
  var page = req.query.page;
  var perpage = req.query.perpage;
  var config = {
    method: "get",
    url: `https://api.unsplash.com/search/photos?client_id=VvkyIVczHhrUMcMsJZ_YQ04wlGMNj__zPm9c3sJ-_h0&query=${query}&page=${page}&per_page=${perpage}`,
    headers: {},
  };
  axios(config)
    .then(function (response) {
      const arr = response.data.results.map((img) => {
        return img.urls.full;
      });
      console.log(arr);
      res.send(arr);
    })
    .catch(function (error) {
      res.status(400);
      console.log(error);
    });
});
var port = 4001;
app.listen(port, () => {
  console.log(`Image Search app listening at http://localhost:${port}, Also please check the local port`);
});
