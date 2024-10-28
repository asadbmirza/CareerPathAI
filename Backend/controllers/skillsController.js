import db from "../db/queries.js";

const getSkills = async (req, res) => {
  try {
    const skills = await db.getSkills(req.user.id);
    res.status(200).json(skills);
  } catch (err) {
    res.status(500).send("An error occurred while fetching skills");
  }
}

const postSkills = async (req, res) => {
  const { skills, location, education } = req.body;
  console.log(req.user);
  try {
    await db.createSkills(skills, req.user.id);
    await db.updateLocationEducation(
      req.user.id,
      education,
      location
    );

    res.status(200).send("Skills added successfully");
  } catch (err) {
    res.status(500).send("An error occurred while adding skills");
  }
};

export default {
    postSkills,
    getSkills,
}