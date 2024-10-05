import dotenv from "dotenv";
import HInference from "@huggingface/inference";

const hf = new HfInference(process.env.HUGGING_FACE_API_KEY); // Add your API key to an environment variable

async function generateResponse(inputText) {
  try {
    const response = await hf.textGeneration({
      model: 'your-username/your-model-name', // Replace with your Hugging Face model name
      inputs: inputText,
      parameters: {
        max_new_tokens: 512, // Adjust token limits if needed
      },
    });
    return response.generated_text;
  } catch (error) {
    console.error("Error generating response:", error);
    throw error;
  }
}

module.exports = { generateResponse };

dotenv.config();