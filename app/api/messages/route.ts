import { NextResponse } from 'next/server';

export async function POST() {
  return NextResponse.json({ message: 'Message received' }, { status: 201 });
}