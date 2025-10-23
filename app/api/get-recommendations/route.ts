import { generateText } from "ai"

export async function POST(req: Request) {
  try {
    const { currentItem, category } = await req.json()

    const { text } = await generateText({
      model: "openai/gpt-4-mini",
      prompt: `Based on a user viewing an auction item with these details:
Item: ${currentItem}
Category: ${category}

Suggest 3-4 similar items they might be interested in. Format as a JSON array with objects containing "title" and "reason" fields. Only return the JSON array, no other text.`,
      maxOutputTokens: 300,
    })

    try {
      const recommendations = JSON.parse(text)
      return Response.json({ recommendations })
    } catch {
      return Response.json({ recommendations: [] })
    }
  } catch (error) {
    console.error("Error getting recommendations:", error)
    return Response.json({ error: "Failed to get recommendations" }, { status: 500 })
  }
}
