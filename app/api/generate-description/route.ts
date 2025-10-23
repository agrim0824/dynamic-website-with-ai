import { generateText } from "ai"

export async function POST(req: Request) {
  try {
    const { title, category, condition } = await req.json()

    const { text } = await generateText({
      model: "openai/gpt-4-mini",
      prompt: `Generate a compelling and detailed product description for an auction item with these details:
Title: ${title}
Category: ${category}
Condition: ${condition}

Create a professional, engaging description that highlights the item's features, condition, and appeal to potential buyers. Keep it concise but informative (150-200 words).`,
      maxOutputTokens: 300,
    })

    return Response.json({ description: text })
  } catch (error) {
    console.error("Error generating description:", error)
    return Response.json({ error: "Failed to generate description" }, { status: 500 })
  }
}
