import { Link } from "react-router";
import type { Highlight } from "../schemas/highlight.schema";


const HighlightBubble = ({ highlight }: { highlight: Highlight }) => {
  return (
    <Link
            to={`/profile/highlights/${highlight.id}`}
            className="flex flex-col items-center space-y-1 w-20"
        >
      <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-gray-300">
                <img
                    src={highlight.img_url}
                    alt={highlight.title}
                    className="w-full h-full object-cover"
                />
            </div>
            <span className="text-xs text-center truncate">{highlight.title}</span>
        </Link>
  );
}

export default HighlightBubble;
