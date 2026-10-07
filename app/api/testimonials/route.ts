import { NextResponse } from 'next/server';

export async function POST() {
  return NextResponse.json({ message: 'Testimonial submitted' }, { status: 201 });
}