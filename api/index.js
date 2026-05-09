import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export default async function handler(req, res) {

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST allowed" });
  }

  try {

    const input = req.body.input;

    const response = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: "أنت مساعد ذكي مختصر وواضح"
        },
        {
          role: "user",
          content: input
        }
      ]
    });

    res.status(200).json({
      output: response.choices[0].message.content
    });

  } catch (err) {

    res.status(500).json({
      error: err.message
    });

  }
}
