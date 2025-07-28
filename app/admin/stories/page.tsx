import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus, Trash2, Edit2 } from "lucide-react";
import { db } from "@/lib/db/client";
import { stories } from "@/lib/db/schema";
import Link from "next/link";

export default async function StoriesPage() {
  const storiesList = await db.select().from(stories).orderBy(stories.createdAt, {
    desc: true,
  });

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Stories</h1>
        <Link href="/admin/stories/new">
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            New Story
          </Button>
        </Link>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {storiesList.map((story) => (
          <Card key={story.id}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{story.title}</CardTitle>
              <div className="flex items-center space-x-4">
                <Link href={`/admin/stories/edit/${story.id}`}>
                  <Edit2 className="h-4 w-4 text-gray-500 hover:text-gray-900" />
                </Link>
                <Link href={`/admin/stories/delete/${story.id}`}>
                  <Trash2 className="h-4 w-4 text-red-500 hover:text-red-700" />
                </Link>
              </div>
            </CardHeader>
            <CardContent className="pt-2">
              <p className="text-sm text-gray-500">{story.description}</p>
              <div className="mt-4 flex items-center">
                <Label className="mr-2">Category:</Label>
                <span className="text-sm">{story.category || 'Uncategorized'}</span>
              </div>
              <div className="mt-2 flex items-center">
                <Label className="mr-2">Status:</Label>
                <span
                  className={`px-2 py-1 rounded-full text-xs ${
                    story.isActive
                      ? 'bg-green-100 text-green-800'
                      : 'bg-red-100 text-red-800'
                  }`}
                >
                  {story.isActive ? 'Active' : 'Inactive'}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
