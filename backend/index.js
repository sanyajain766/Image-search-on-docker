const axios = require("axios");
const express = require ("express");

const app = express()
 

app.get('/photos', function (req, res) {
    var query= req.query.search
    var config = {
        method: 'get',
        url: `https://api.unsplash.com/search/photos?client_id=VvkyIVczHhrUMcMsJZ_YQ04wlGMNj__zPm9c3sJ-_h0&query=${query}`,
        headers: { }
      };
  axios(config)
.then(function (response) {
    res.send(response.data.result);
})
.catch(function (error) {
    res.status(400);
  console.log(error);
});
})

app.listen(4001);