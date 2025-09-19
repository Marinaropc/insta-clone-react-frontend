import { Outlet ,useLoaderData } from "react-router";
import { useState } from "react"
import { api } from "~/services/api";
import { highlightsSchema, type Highlight } from "~/schemas/highlight.schema";
import  HighlightBubble  from "~/components/HighlightBubble";


export async function loader() {
  try {
    const response = await api.get("/highlights");
    return response.data;

  } catch (error) {
    console.error("Failed to load highlights:", error);
    throw new Response("Could not load highlights.", { status: 500 });
  }
}
const Highlights= () => {
    const highlights = useLoaderData() as Highlight[];
    const [fullscreen, setFullscreen] = useState<boolean>(false);

    return (
        <>
            { !fullscreen &&
                <div className="flex flex-col gap-1">
                    {highlights.length === 0 && (
                        <p className="text-center text-gray-500">No highlights yet</p>
                    )}
                    <div onClick={() => setFullscreen(!fullscreen)}>
                        {highlights.map((highlight) => (
                            <HighlightBubble
                                key={highlight.id}
                                highlight={highlight}
                            />
                        ))}
                    </div>
                </div>
            }
            { fullscreen &&
                <div onClick={() => setFullscreen(!fullscreen)}>
                    <Outlet />
                </div>
            }
        </>
    )
}

export default Highlights