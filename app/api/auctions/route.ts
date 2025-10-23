import { createClient } from "@/lib/supabase/server"

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const category = searchParams.get("category")
  const search = searchParams.get("search")

  const supabase = await createClient()

  let query = supabase.from("auctions").select("*, auction_images(*), bids(count)")

  if (category && category !== "all") {
    query = query.eq("category_id", category)
  }

  if (search) {
    query = query.ilike("title", `%${search}%`)
  }

  const { data: auctions, error } = await query.order("created_at", { ascending: false })

  if (error) {
    return Response.json({ error: error.message }, { status: 500 })
  }

  return Response.json({ auctions })
}
