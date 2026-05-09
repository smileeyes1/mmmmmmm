import OpenAI from "openai";

export default async function handler(req, res) {

  const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
  });

  const input = req.body.input;

  const response = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content: "أنت مساعد ذكي مختصر وواضح."
      },
      {
        role: "user",
        content: input
      }
    ]
  });

  res.json({
    output: response.choices[0].message.content
  });

}
