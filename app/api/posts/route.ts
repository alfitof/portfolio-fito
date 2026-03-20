import { posts } from "@/lib/posts";
import { NextResponse } from "next/server";

export async function GET() {
  const slugs = posts.map((p) => p.slug);
  return NextResponse.json(slugs);
}
