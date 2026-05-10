import { NextResponse } from "next/server";
// Relative paths use karein taake confusion khatam ho
import dbConnect from "../../../lib/dbConnect"; 
import Cart from "../../../models/Cart";

// 1. Add to Cart Logic
export async function POST(req) {
  try {
    await dbConnect();
    const data = await req.json();

    // Check karein agar item pehle se hai to quantity barha dein
    const item = await Cart.findOneAndUpdate(
      { id: data.id, size: data.size }, 
      { 
        $inc: { quantity: 1 }, 
        $set: { 
          title: data.title, 
          price: data.price, 
          image: data.image 
        } 
      },
      { upsert: true, new: true }
    );

    return NextResponse.json(item, { status: 200 });
  } catch (error) {
    console.error("❌ API POST ERROR:", error);
    return NextResponse.json({ error: "Database Connection Timeout" }, { status: 500 });
  }
}

// 2. Fetch Cart Items
export async function GET() {
  try {
    await dbConnect();

    const items = await Cart.aggregate([
      {
        $group: {
          _id: { id: "$id", size: "$size" },
          id: { $first: "$id" },
          size: { $first: "$size" },
          title: { $first: "$title" },
          price: { $first: "$price" },
          image: { $first: "$image" },
          quantity: { $sum: "$quantity" }
        }
      }
    ]);

    return NextResponse.json(items || [], { status: 200 });

  } catch (error) {
    console.error("❌ GET CART ERROR:", error);

    // ✅ ALWAYS RETURN RESPONSE
    return NextResponse.json(
      { error: "Failed to fetch cart" },
      { status: 500 }
    );
  }
}
// 3. Remove from Cart Logic (Fixes 405 Error)
export async function DELETE(req) {
  try {
    await dbConnect();
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    const size = searchParams.get("size");

    if (!id || !size) {
      return NextResponse.json({ error: "Missing ID or Size" }, { status: 400 });
    }

    await Cart.findOneAndDelete({ id, size });
    return NextResponse.json({ message: "Item removed successfully" }, { status: 200 });
  } catch (error) {
    console.error("❌ API DELETE ERROR:", error);
    return NextResponse.json({ error: "Delete failed" }, { status: 500 });
  }
}