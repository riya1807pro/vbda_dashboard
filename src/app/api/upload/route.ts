import { NextRequest, NextResponse } from "next/server";
import { parse } from "csv-parse/sync";

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const file = formData.get("file") as File;

  const buffer = Buffer.from(await file.arrayBuffer());
  const csv = buffer.toString("utf-8");

  const records = parse(csv, {
    columns: true,
    skip_empty_lines: true,
  });

  return NextResponse.json({ recipients: records });
}
