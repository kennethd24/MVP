const pool = require('./index');

const dbHelpers = {
  postUserFeed: async (req, res) => {
    const {
      id, webVideoUrl, playCount, diggCount, commentCount, createTime, shareCount,
    } = req.body;
    const user_id = req.body.authorMeta.id;
    const formatDate = new Date(createTime * 1000).toISOString();
    const qryStr = `
    INSERT INTO uservideos
    (id, user_id, webvideourl, playcount, diggcount, commentcount,date, sharecount)
    VALUES
    ($1 , $2, $3, $4, $5, $6, $7, $8)`;
    try {
      await pool.query(qryStr,
        [id, user_id, webVideoUrl, playCount, diggCount, commentCount, formatDate, shareCount]);
      res.status(200).send('Successful postUserFeed');
    } catch (err) {
      res.status(400).send(err);
    }
  },
  postUsers: async (req, res) => {
    const {
      id, name, following, fans, heart, video,
    } = req.body;
    const qryStr = `
    INSERT INTO users
    (id, name, following, fans, heart, video)
    VALUES
    ($1 , $2, $3, $4, $5, $6)
    `;
    try {
      await pool.query(qryStr, [id, name, following, fans, heart, video]);
      res.status(200).send('Successful postUsers');
    } catch (err) {
      res.status(400).send(err);
    }
  },
  getUsers: async (req, res) => {
    const qryStr = `
    SELECT id, name, following, fans, heart, video
    FROM users
    GROUP by id`;
    try {
      const { rows } = await pool.query(qryStr);
      res.status(200).send(rows);
    } catch (err) {
      res.status(400).send(err);
    }
  },
};

module.exports = dbHelpers;
