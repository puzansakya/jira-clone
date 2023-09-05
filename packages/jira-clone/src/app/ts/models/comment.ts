import { z } from 'zod';

export const CommentSchema = z.object({
  id: z.number().optional(),
  body: z.string(),
  userId: z.number(),
  issueId: z.number(),
});

export type IComment = z.infer<typeof CommentSchema>;

export const CommentCollectionSchema = z.array(CommentSchema);

export type ICommentCollection = z.infer<typeof CommentCollectionSchema>;
