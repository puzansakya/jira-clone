import { z } from 'zod';

export const IssueTypeSchema = z.object({
  id  : z.number().optional(),
  name: z.string().optional(),

  modifiedAt: z.string().optional(),
  deletedAt : z.string().optional(),
  isDeleted : z.boolean().optional(),
});

export type IIssueType = z.infer<typeof IssueTypeSchema>;

export const IssueTypeCollectionSchema = z.array(IssueTypeSchema);

export type IIssueTypeCollection = z.infer<typeof IssueTypeCollectionSchema>;
