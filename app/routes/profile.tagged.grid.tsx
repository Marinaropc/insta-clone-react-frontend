import { useLoaderData } from "react-router";
import { api } from "~/services/api";
import { tagsSchema, type Tagged } from "../schemas/tagged.schema";
import { TaggedGridItem } from "~/components/TagGridItem";

export async function loader() {
  try {
    const response = await api.get("/tagged/grid");
    return tagsSchema.parse(response.data);
  } catch (error) {
    console.error("Failed to load posts:", error);
    throw new Response("Could not load posts.", { status: 500 });
  }
}

export default function TaggedGrid() {
  const tags = useLoaderData() as Tagged[];
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
      {tags.map((tagged) => (
        <TaggedGridItem key={tagged.id} tagged={tagged} />
      ))}
    </div>
  );
}