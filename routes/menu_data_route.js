const axios = require('axios');

module.exports = app => {
  app.get('/api/data', async (req, res) => {
    try {
      const request = await axios.get('https://api-mcburgerking.herokuapp.com/');
      const { data } = request;
      res.status(200).send(data);
    } catch (error) {
      res.status(400).send(error)
    }
  });

  app.get('/api/data/:id', async (req, res) => {
    try {
      const request = await axios.get(`https://api-mcburgerking.herokuapp.com/${req.params.id}`);
      const { data } = request;
      res.status(200).send(data);
    } catch (error) {
      res.status(400).send(error)
    }
  });
};
