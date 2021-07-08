const dbHelpers = {
  postUserFeed: async (req, res) => {
    const { name } = req.body;
    const qryStr = '';
    try {
      await pool.query(qryStr);
      res.status(200).send('Successful postUserFeed');
    } catch (err) {
      res.status(400).send(err);
    }
  },
};

module.exports = dbHelpers;
