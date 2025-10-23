import { createClient } from "@/lib/supabase/server"

export async function GET(req: Request) {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    return Response.json({ error: "Unauthorized" }, { status: 401 })
  }

  const { data: watchlist, error } = await supabase.from("watchlist").select("*, auctions(*)").eq("user_id", user.id)

  if (error) {
    return Response.json({ error: error.message }, { status: 500 })
  }

  return Response.json({ watchlist })
}

export async function POST(req: Request) {
  const { auctionId } = await req.json()

  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    return Response.json({ error: "Unauthorized" }, { status: 401 })
  }

  const { data: item, error } = await supabase
    .from("watchlist")
    .insert({
      user_id: user.id,
      auction_id: auctionId,
    })
    .select()
    .single()

  if (error) {
    return Response.json({ error: error.message }, { status: 500 })
  }

  return Response.json({ item })
}

export async function DELETE(req: Request) {
  const { searchParams } = new URL(req.url)
  const watchlistId = searchParams.get("id")

  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    return Response.json({ error: "Unauthorized" }, { status: 401 })
  }

  const { error } = await supabase.from("watchlist").delete().eq("id", watchlistId).eq("user_id", user.id)

  if (error) {
    return Response.json({ error: error.message }, { status: 500 })
  }

  return Response.json({ success: true })
}
