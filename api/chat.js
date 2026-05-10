import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export default async function handler(req, res) {

  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Only POST allowed"
    });
  }

  try {

    const { input } = req.body;

    const response = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: "أنت مساعد ذكي ومختصر."
        },
        {
          role: "user",
          content: input
        }
      ]
    });

    return res.status(200).json({
      output: response.choices[0].message.content
    });

  } catch (err) {

    return res.status(500).json({
      error: err.message
    });

  }

}
