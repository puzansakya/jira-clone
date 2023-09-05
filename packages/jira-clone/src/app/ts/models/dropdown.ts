import { z } from 'zod';

export const DropdownSchema = z.object({
  label: z.string().optional().or(z.undefined()),
  value: z.number().optional().or(z.string().optional()).or(z.undefined()),
  src  : z.string().optional().or(z.undefined()),
  icon : z.string().optional().or(z.undefined()),
});

export type IDropdown = z.infer<typeof DropdownSchema>;

export const DropdownCollectionSchema = z.array(DropdownSchema);

export type IDropdownCollection = z.infer<typeof DropdownCollectionSchema>;
