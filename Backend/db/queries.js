import pool from "./pool.js";

async function createUser(username, email, password) {
  const query = `
    INSERT INTO users (username, email, password)
    VALUES ($1, $2, $3)
    RETURNING *;
  `;

  const { rows } = await pool.query(query, [username, email, password]);
  return rows;
}

async function getUserByUsername(username) {
  const query = `
    SELECT * FROM users
    WHERE username = $1;
  `;

  const { rows } = await pool.query(query, [username]);
  return rows;
}

async function getUserById(id) {
  const query = `
      SELECT * FROM users
      WHERE id = $1;
    `;

  const { rows } = await pool.query(query, [id]);
  return rows;
}

async function getUserByEmail(email) {
  const query = `
      SELECT * FROM users
      WHERE email = $1;
    `;

  const { rows } = await pool.query(query, [email]);
  return rows;
}

// async function createResponses(rating, responses, userId) {
//   const query = `
//     INSERT INTO responses (rating, response1, response2, response3, response4, response5, user_id)
//     VALUES ($1, $2, $3, $4, $5, $6, $7)
//     RETURNING *;
//   `;

//   const { rows } = await pool.query(query, [
//     rating,
//     responses[0],
//     responses[1],
//     responses[2],
//     responses[3],
//     responses[4],
//     userId,
//   ]);
//   return rows;
// }

async function getResponsesByUserId(userId) {
  const query = `
    SELECT * FROM responses
    WHERE user_id = $1;
  `;

  const { rows } = await pool.query(query, [userId]);
  return rows;
}

async function createSkills(skills, userId) {
  const query = `
      INSERT INTO skills (skill, user_id)
      VALUES ($1, $2)
      RETURNING *;
    `;

  for (let i = 0; i < skills.length; i++) {
    await pool.query(query, [skills[i], userId]);
  }
}

async function updateLocationEducation(userId, education, location) {
  const query = `
      UPDATE users
      SET education = $1, location = $2
      WHERE id = $3
      RETURNING *;
    `;
  try {
    const { rows } = await pool.query(query, [education, location, userId]);
    return rows;
  } catch (error) {
    console.error("Database update error:", error);
    throw error; // or return a specific error message
  }
}

async function getSkills(userId) {
  const query = `
      SELECT * FROM skills
      WHERE user_id = $1;
    `;

  const { rows } = await pool.query(query, [userId]);
  return rows;
}

async function createResponses(responses, userId) {
  try {
    const query = `
    INSERT INTO responses (response, user_id)
    VALUES ($1, $2)
    RETURNING *;
  `;

    for (let i = 0; i < responses.length; i++) {
      let { rows } = await pool.query(query, [
        responses[i].step,
        userId,
      ]);
      await createResponseSkills(
        responses[i].requiredSkills,
        userId,
        rows[0].id
      );
    }
  } catch (err) {
    console.error("Error creating responses:", err);
  }
}

async function createResponseSkills(skills, userId, responseId) {
  try {
    const query = `
      INSERT INTO responseSkills (skill, user_id, response_id)
      VALUES ($1, $2, $3)
      RETURNING *;
    `;

    for (let i = 0; i < skills.length; i++) {
      await pool.query(query, [skills[i], userId, responseId]);
    }
  } catch (err) {
    console.error("Error creating response skills:", err);
  }
}

export default {
  createUser,
  getUserByUsername,
  getUserById,
  getUserByEmail,
  createResponses,
  getResponsesByUserId,
  createSkills,
  updateLocationEducation,
  getSkills,
};
