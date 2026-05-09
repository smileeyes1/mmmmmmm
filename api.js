import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

async function run() {
  try {

    const response = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "user", content: "قل مرحبًا بك كمساعد ذكي" }
      ]
    });

    console.log("AI RESPONSE:");
    console.log(response.choices[0].message.content);

  } catch (err) {
    console.error("ERROR:");
    console.error(err.message);
  }
}

run();
