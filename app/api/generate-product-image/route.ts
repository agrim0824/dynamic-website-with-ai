import { generateText } from "ai"

export async function POST(req: Request) {
  try {
    const { title, category, description } = await req.json()

    const { text } = await generateText({
      model: "google/gemini-2.5-flash-image",
      prompt: `Generate a professional product image for an auction item with these details:
Title: ${title}
Category: ${category}
Description: ${description}

Create a high-quality, realistic product image suitable for an online auction. The image should be well-lit, professional, and showcase the item clearly.`,
    })

    return Response.json({ image: text })
  } catch (error) {
    console.error("Error generating image:", error)
    return Response.json({ error: "Failed to generate image" }, { status: 500 })
  }
}
