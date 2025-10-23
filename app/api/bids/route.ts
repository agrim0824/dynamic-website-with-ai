import { createClient } from "@/lib/supabase/server"

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const auctionId = searchParams.get("auctionId")

  if (!auctionId) {
    return Response.json({ error: "Missing auctionId" }, { status: 400 })
  }

  const supabase = await createClient()

  const { data: bids, error } = await supabase
    .from("bids")
    .select("*, bidder_id")
    .eq("auction_id", auctionId)
    .order("bid_amount", { ascending: false })
    .limit(10)

  if (error) {
    return Response.json({ error: error.message }, { status: 500 })
  }

  return Response.json({ bids })
}

export async function POST(req: Request) {
  const { auctionId, bidAmount } = await req.json()

  if (!auctionId || !bidAmount) {
    return Response.json({ error: "Missing required fields" }, { status: 400 })
  }

  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    return Response.json({ error: "Unauthorized" }, { status: 401 })
  }

  const { data: bid, error } = await supabase
    .from("bids")
    .insert({
      auction_id: auctionId,
      bidder_id: user.id,
      bid_amount: bidAmount,
    })
    .select()
    .single()

  if (error) {
    return Response.json({ error: error.message }, { status: 500 })
  }

  return Response.json({ bid })
}
