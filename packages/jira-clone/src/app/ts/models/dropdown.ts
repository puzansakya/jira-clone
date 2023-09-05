import { z } from 'zod';

export const DropdownSchema = z.object({
  label: z.string(),
  value: z.number(),
});

export type IDropdown = z.infer<typeof DropdownSchema>;

export const DropdownCollectionSchema = z.array(DropdownSchema);

export type IDropdownCollection = z.infer<typeof DropdownCollectionSchema>;
