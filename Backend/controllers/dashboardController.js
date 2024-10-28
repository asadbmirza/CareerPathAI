import db from "../db/queries.js";
import { generate } from "./career_plan_ai.js";

const getDashboard = async (req, res) => {
    try {
        const skills = await db.getSkills(req.user.id);
        const {location, education} = await db.getUserById(req.user.id);
        const careerPlan = await generate(skills, location, education);
        db.createResponses(careerPlan, req.user.id);
        res.status(200).json(careerPlan);
    }
    catch (err) {
        res.status(500).send("An error occurred while fetching dashboard");
    }

}

export default {getDashboard};