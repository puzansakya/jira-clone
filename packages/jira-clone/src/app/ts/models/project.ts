import { z } from 'zod';
import { ProjectCategorySchema } from './project-category';

export const ProjectSchema = z.object({
  id               : z.number().optional(),
  name             : z.string().optional(),
  url              : z.string().optional(),
  description      : z.string().optional(),
  projectCategoryId: z.string().optional().or(ProjectCategorySchema),

  modifiedAt: z.string().optional(),
  deletedAt : z.string().optional(),
  isDeleted : z.boolean().optional(),
});

export type IProject = z.infer<typeof ProjectSchema>;

export const ProjecCollectionSchema = z.array(ProjectSchema);

export type IProjectCategoryCollection = z.infer<
  typeof ProjecCollectionSchema
>;
