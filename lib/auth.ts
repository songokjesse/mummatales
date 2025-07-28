import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";

export async function getAuthSession() {
  try {
    return await getServerSession(authOptions);
  } catch (error) {
    console.error('Error getting auth session:', error);
    return null;
  }
}

export function isAdmin(session: any) {
  return session?.user?.role === 'ADMIN';
}

export function isAuthed(session: any) {
  return !!session?.user;
}
