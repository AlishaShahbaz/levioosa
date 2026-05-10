import { NextResponse } from "next/server";
// Check karein agar aapka file name 'mongodb' hai ya 'dbConnect'
import dbConnect from "@/lib/dbConnect"; 
import Wishlist from "@/models/Wishlist";

// GET ALL WISHLIST ITEMS
export async function GET() {
  try {
    await dbConnect();
    const items = await Wishlist.find({}).sort({ createdAt: -1 });
    return NextResponse.json(items);
  } catch (error) {
    console.error("GET Wishlist Error:", error);
    return NextResponse.json([], { status: 500 });
  }
}

// ADD TO WISHLIST
export async function POST(req) {
  try {
    await dbConnect();
    const data = await req.json();

    if (!data.id) {
      return NextResponse.json({ error: "Product ID required" }, { status: 400 });
    }

    const existingItem = await Wishlist.findOne({ id: data.id });
    if (existingItem) {
      return NextResponse.json(existingItem, { status: 200 });
    }

    const newItem = await Wishlist.create({
      id: data.id,
      title: data.title,
      price: data.price,
      image: data.image,
      category: data.category,
    });

    return NextResponse.json(newItem, { status: 201 });
  } catch (error) {
    console.error("POST Wishlist Error:", error);
    return NextResponse.json({ error: "Failed to add" }, { status: 500 });
  }
}

// DELETE WISHLIST ITEM (FIXED LOGIC)
export async function DELETE(req) {
  try {
    await dbConnect();
    
    // Frontend Body se ID nikalne ke liye
    const data = await req.json();
    const id = data.id;

    if (!id) {
      return NextResponse.json({ error: "ID required" }, { status: 400 });
    }

    // $or use kiya hai taake agar _id ho ya custom id, dono surat mein delete ho jaye
    const deleted = await Wishlist.findOneAndDelete({
      $or: [{ id: id }, { _id: id }]
    });

    if (!deleted) {
      return NextResponse.json({ success: false, message: "Not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, message: "Deleted successfully" });

  } catch (error) {
    console.error("DELETE Wishlist Error:", error);
    return NextResponse.json({ error: "Delete failed" }, { status: 500 });
  }
}