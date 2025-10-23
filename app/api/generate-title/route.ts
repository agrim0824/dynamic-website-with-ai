import { generateText } from "ai"

export async function POST(req: Request) {
  try {
    const { description, category } = await req.json()

    const { text } = await generateText({
      model: "openai/gpt-4-mini",
      prompt: `Generate 3 compelling auction item titles based on this description and category:
Description: ${description}
Category: ${category}

Create titles that are:
- Specific and descriptive
- SEO-friendly
- Attention-grabbing
- Under 80 characters each

Format as a JSON array with a "titles" field containing an array of strings. Only return the JSON, no other text.`,
      maxOutputTokens: 200,
    })

    try {
      const result = JSON.parse(text)
      return Response.json({ titles: result.titles })
    } catch {
      return Response.json({ titles: [] })
    }
  } catch (error) {
    console.error("Error generating titles:", error)
    return Response.json({ error: "Failed to generate titles" }, { status: 500 })
  }
}
