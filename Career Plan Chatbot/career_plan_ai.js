import Groq from "groq-sdk";
import dotenv from "dotenv";

dotenv.config();

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export async function main() {
  const chatCompletion = await getGroqChatCompletion();
  console.log(chatCompletion.choices[0]?.message?.content || "");
}

export async function getGroqChatCompletion() {
  return groq.chat.completions.create({
    messages: [
        {
            role: "system",
            content: "You are a career path assistant. Your job is to provide personalized career guidance to users based on their location, skills, and education. Do it in 5 consecutive, non trivial detailed steps. If possible give examples of courses to take in the detailed steps.",
        },
      {
        role: "user",
        content: "I live in {location}, my skills and interests are {skills} and I want to pursue a career related to my skills/interests. Please help me!",
      },
    ],
    model: "llama3-8b-8192",
  });
}

main().catch((error) => {
    console.error("Error:", error);
  })