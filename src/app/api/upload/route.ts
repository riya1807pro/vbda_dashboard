import { NextRequest, NextResponse } from "next/server";
import { parse } from "csv-parse/sync";

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const file = formData.get("file") as File;

  if (!file) {
    return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  const csv = buffer.toString("utf-8");

  console.log("CSV Data:", csv); // Log the CSV content to check for issues

  try {
    const records = parse(csv, {
      columns: true,
      skip_empty_lines: true,
    });

    return NextResponse.json({ recipients: records });
  } catch (error) {
    console.error("CSV Parsing Error:", error);
    return NextResponse.json({ error: "Failed to parse CSV" }, { status: 500 });
  }
}
