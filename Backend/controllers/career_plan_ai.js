import Groq from "groq-sdk";
import dotenv from "dotenv";

dotenv.config();

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export async function generate(skills, location, education) {
  try {
    const chatCompletion = await getGroqChatCompletion(skills, location, education);
    const content = chatCompletion.choices[0]?.message?.content || "";

    let parsed;
    
      parsed = JSON.parse(content);

    if (Array.isArray(parsed) && parsed.length === 5) {
      return parsed.map((step, index) => ({
        step: step.step || `Step ${index + 1}`,
        requiredSkills: step.requiredSkills || [],
      }));
    } else {
      throw new Error("Unexpected response format");
    }
  } catch (error) {
    console.error("Error generating career path:", error);
    return [];
  }
}

async function getGroqChatCompletion(skills, location, education) {
  const skillsList = skills.join(", ");

  const messages = [
    {
      role: "system",
      content: `You are a career path assistant. Your job is to provide personalized career paths to users based on their location (${location}), skills (${skillsList}), and education (${education}). 
      Provide a career path in 5 very detailed steps with specific examples. Each step should be an object with the following structure:
      {
        "step": "<Description of the step>",
        "requiredSkills": ["Skill1", "Skill2", ...]
      }
      Please return the entire response as a valid JSON array meaning do not include an intro or conclusion that is not JSON`,
    },
    {
      role: "user",
      content: `I live in ${location}, my skills and interests are ${skillsList}, and my education is ${education}. Please help me plan my career path!`,
    },
  ];

  return groq.chat.completions.create({
    messages,
    model: "llama3-8b-8192",
    temperature: 0.7,
    max_tokens: 1500,
  });
}
