import { z } from 'zod';

export const StatusSchema = z.object({
  id      : z.number().optional(),
  name    : z.string().optional(),
  position: z.string().optional(),
  bg      : z.string().optional(),
  color   : z.string().optional(),

  modifiedAt: z.string().optional(),
  deletedAt : z.string().optional(),
  isDeleted : z.boolean().optional(),
});

export type IStatus = z.infer<typeof StatusSchema>;

export const StatusCollectionSchema = z.array(StatusSchema);

export type IStatusCollection = z.infer<typeof StatusCollectionSchema>;
