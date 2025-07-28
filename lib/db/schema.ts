import { pgTable, serial, text, timestamp, integer, jsonb, boolean } from 'drizzle-orm/pg-core';

export const stories = pgTable('stories', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  description: text('description'),
  category: text('category'),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
  isActive: boolean('is_active').notNull().default(true),
});

export const slides = pgTable('slides', {
  id: serial('id').primaryKey(),
  storyId: integer('story_id').references(() => stories.id),
  slideNumber: integer('slide_number').notNull(),
  transcript: text('transcript').notNull(),
  audioUrl: text('audio_url'),
  imageUrl: text('image_url'),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});
