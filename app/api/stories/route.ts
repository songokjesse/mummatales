import { NextResponse } from 'next/server';
import { db } from '@/lib/db/client';
import { stories } from '@/lib/db/schema';
import { eq } from 'drizzle-orm';

export async function GET() {
  try {
    const storiesList = await db.select().from(stories).orderBy(stories.createdAt, {
      desc: true,
    });
    return NextResponse.json(storiesList);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch stories' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const story = await db.insert(stories).values(data).returning();
    return NextResponse.json(story[0]);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create story' }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    if (!id) {
      return NextResponse.json({ error: 'ID is required' }, { status: 400 });
    }
    await db.delete(stories).where(eq(stories.id, parseInt(id)));
    return NextResponse.json({ message: 'Story deleted successfully' });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete story' }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const data = await request.json();
    const { id, ...updateData } = data;
    if (!id) {
      return NextResponse.json({ error: 'ID is required' }, { status: 400 });
    }
    const story = await db
      .update(stories)
      .set(updateData)
      .where(eq(stories.id, id))
      .returning();
    return NextResponse.json(story[0]);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update story' }, { status: 500 });
  }
}
