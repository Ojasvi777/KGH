import { hash } from "bcryptjs";
import clientPromise from "@/lib/mongodb";

export async function POST(req) {
  const { name, email, password } = await req.json();
  if (!email || !password) return new Response("Missing fields", { status: 400 });

  const client = await clientPromise;
  const db = client.db();

  const existing = await db.collection("users").findOne({ email });
  if (existing) return new Response("Email already exists", { status: 409 });

  const hashed = await hash(password, 12);
  const result = await db.collection("users").insertOne({ name, email, password: hashed });

  return Response.json({ message: "User created", userId: result.insertedId });
}

