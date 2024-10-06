const pool = require("./pool");

async function createUser(username, email, password) {
  const query = `
    INSERT INTO users (username, email, password)
    VALUES ($1, $2, $3)
    RETURNING *;
  `;

  const { rows } = await pool.query(query, [username, email, password]);
  return rows[0];
}

async function getUserByUsername(username) {
  const query = `
    SELECT * FROM users
    WHERE username = $1;
  `;

  const { rows } = await pool.query(query, [username]);
  return rows[0];
}

async function getUserById(id) {
    const query = `
      SELECT * FROM users
      WHERE id = $1;
    `;
  
    const { rows } = await pool.query(query, [id]);
    return rows[0];
  }

async function getUserByEmail(email) {
    const query = `
      SELECT * FROM users
      WHERE email = $1;
    `;
  
    const { rows } = await pool.query(query, [email]);
    return rows[0];
  }

async function createResponses(rating, responses, userId) {
  const query = `
    INSERT INTO responses (rating, response1, response2, response3, response4, response5, user_id)
    VALUES ($1, $2, $3, $4, $5, $6, $7)
    RETURNING *;
  `;

  const { rows } = await pool.query(query, [
    rating,
    responses[0],
    responses[1],
    responses[2],
    responses[3],
    responses[4],
    userId,
  ]);
  return rows[0];
}

async function getResponsesByUserId(userId) {
  const query = `
    SELECT * FROM responses
    WHERE user_id = $1;
  `;

  const { rows } = await pool.query(query, [userId]);
  return rows;
}

async function getSkillsByUserId(userId) {
    const query = `
      SELECT * FROM skills
      WHERE user_id = $1;
    `;
  
    const { rows } = await pool.query(query, [userId]);
    return rows;
  }


module.exports = {
    createUser,
    getUserById,
    getUserByUsername,
    getUserByEmail,
    createResponses,
    getResponsesByUserId,
    getSkillsByUserId
}