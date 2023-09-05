import { z } from 'zod';

export const PrioritySchema = z.object({
  id  : z.number().optional(),
  name: z.string().optional(),
  icon: z.string().optional(),

  modifiedAt: z.string().optional(),
  deletedAt : z.string().optional(),
  isDeleted : z.boolean().optional(),
});

export type IPriority = z.infer<typeof PrioritySchema>;

export const PriorityCollectionSchema = z.array(PrioritySchema);

export type IPriorityCollection = z.infer<typeof PriorityCollectionSchema>;
