import { z } from 'zod';

export const UserSchema = z.object({
  id       : z.number().optional(),
  firstName: z.string().optional(),
  lastName : z.string().optional(),
  avatar   : z.string().optional(),

  modifiedAt: z.string().optional(),
  deletedAt : z.string().optional(),
  isDeleted : z.boolean().optional(),
});

export type IUser = z.infer<typeof UserSchema>;

export const UserCollectionSchema = z.array(UserSchema);

export type IUserCollection = z.infer<typeof UserCollectionSchema>;
