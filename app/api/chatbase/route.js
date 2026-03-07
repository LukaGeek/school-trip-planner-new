// app/api/chatbase-token/route.ts
import { , NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

export async function GET(req) {
  // Replace this with your actual user fetching logic
  const user = await getSignedInUser(); 

  const secret = process.env.CHATBOT_IDENTITY_SECRET;
  if (!secret) {
    return NextResponse.json({ error: 'Server misconfigured' }, { status: 500 });
  }

  const token = jwt.sign(
    {
      user_id: user.id,
      email: user.email,
    },
    secret,
    { expiresIn: '1h' }
  );

  return NextResponse.json({ token });
}

// Mock function — replace with your auth logic
async function getSignedInUser() {
  return {
    id: '12345',
    email: 'lukalinchiki0@gmail.com',
  };
}