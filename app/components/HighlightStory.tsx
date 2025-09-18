import type { Highlight } from "~/schemas/highlight.schema"

const HighlightStory = ({highlight}: {highlight: Highlight}) => {

    return (
        <div className="w-full max-w-lg mx-auto rounded-lg overflow-hidden border bg-white mb-6">
            <img
                src={highlight.img_url}
                alt={highlight.title|| "Instagram post"}
                className="w-full h-auto aspect-square object-cover"
            />
        </div>
    )
}

export default HighlightStory