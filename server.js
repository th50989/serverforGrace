const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/api/data', (req, res) => {
    console.log(req.params);
    console.log(req.body);
    console.log(req.baseUrl);


  const mockData = {
    id: 1,
    name: "John Doe",
    email: "johndoe@example.com",
    age: 25,
    occupation: "Software Developer"
  };

  res.json(mockData);
  console.log("has request");
});

app.listen(port, () => {
  console.log('port : '+port);
});
