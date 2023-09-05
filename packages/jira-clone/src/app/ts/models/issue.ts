import { z } from 'zod';
import { DropdownCollectionSchema, DropdownSchema } from './dropdown';

export const IssueSchema = z.object({
  id             : z.number().optional(),
  title          : z.string().optional(),
  listPosition   : z.string().optional(),
  description    : z.string().optional(),
  descriptionText: z.string().optional(),
  estimate       : z.number().optional(),
  timeSpent      : z.number().optional(),
  timeRemaining  : z.number().optional(),

  projectId : z.number().optional().or(DropdownSchema),
  typeId    : z.number().optional().or(DropdownSchema),
  statusId  : z.number().optional().or(DropdownSchema),
  priorityId: z.number().optional().or(DropdownSchema),
  reporterId: z.number().optional().or(DropdownSchema),
  assignees : z.array(z.number()).optional().or(DropdownCollectionSchema),

  createdAt : z.string().optional(),
  modifiedAt: z.string().optional(),
  deletedAt : z.string().optional(),
  isDeleted : z.boolean().optional(),
});

export type IIssue = z.infer<typeof IssueSchema>;

export const IssueCollectionSchema = z.array(IssueSchema);

export type IIssueCollection = z.infer<typeof IssueCollectionSchema>;
