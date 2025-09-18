import { z } from "zod";

const tagSchema = z.object({
    id: z.number(),
    img_url: z.string().url(),
    caption: z.string(),
    created: z.string(),
    tagged_by: z.string().nonempty(),
})

const tagsSchema = z.array(tagSchema);

type Tagged = z.infer<typeof tagSchema>;

export { tagSchema, tagsSchema };
export type { Tagged };