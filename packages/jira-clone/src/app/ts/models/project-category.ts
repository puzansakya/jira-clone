import { z } from 'zod';

export const ProjectCategorySchema = z.object({
  id   : z.number().optional(),
  label: z.string().optional(),
  value: z.number().optional(),

  modifiedAt: z.string().optional(),
  deletedAt : z.string().optional(),
  isDeleted : z.boolean().optional(),
});

export type IProjectCategory = z.infer<typeof ProjectCategorySchema>;

export const ProjectCategoryCollectionSchema = z.array(ProjectCategorySchema);

export type IProjectCategoryCollection = z.infer<
  typeof ProjectCategoryCollectionSchema
>;
