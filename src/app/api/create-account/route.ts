import { EMAIL_REGEX } from "@/utils/mail.regex";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email } = await req.json();
  const isValid = EMAIL_REGEX.test(email);

  await new Promise((resolve) => setTimeout(resolve, 2000))

  return !isValid
    ? NextResponse.json(
        { message: "There's an error from server" },
        { status: 400 }
      )
    : NextResponse.json({ message: "Account Created" });
}
