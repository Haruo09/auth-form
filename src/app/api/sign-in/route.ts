'use server';

import { NextResponse, NextRequest } from "next/server";

import { UserData } from "@/lib/UserSchema";
import { mysql } from "@/database/mysql";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  
  const email = searchParams.get('email');
  const password = searchParams.get('password');

  const user: UserData[] = await mysql.query(
    "SELECT name, email, password FROM user " +
    "WHERE user.email = ? AND user.password = ?;",
    [email, password]
  );

  if (user.length == 1)
    return NextResponse.json(user[0]);

  return NextResponse.json({})
}

// export async function POST(request: Request) {
//   const data = await request.json();

//   // console.log(data);
  
//   return new Response(JSON.stringify(data));
// }
