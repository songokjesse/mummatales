import { NextResponse } from 'next/server';
import { db } from '@/lib/db/client';
import { slides } from '@/lib/db/schema';
import { eq } from 'drizzle-orm';

export async function GET() {
  try {
    const slidesList = await db
      .select()
      .from(slides)
      .orderBy(slides.slideNumber);
    return NextResponse.json(slidesList);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch slides' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const slide = await db.insert(slides).values(data).returning();
    return NextResponse.json(slide[0]);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create slide' }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    if (!id) {
      return NextResponse.json({ error: 'ID is required' }, { status: 400 });
    }
    await db.delete(slides).where(eq(slides.id, parseInt(id)));
    return NextResponse.json({ message: 'Slide deleted successfully' });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete slide' }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const data = await request.json();
    const { id, ...updateData } = data;
    if (!id) {
      return NextResponse.json({ error: 'ID is required' }, { status: 400 });
    }
    const slide = await db
      .update(slides)
      .set(updateData)
      .where(eq(slides.id, id))
      .returning();
    return NextResponse.json(slide[0]);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update slide' }, { status: 500 });
  }
}
