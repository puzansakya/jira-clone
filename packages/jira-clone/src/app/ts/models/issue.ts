import { z } from 'zod';
import { DropdownCollectionSchema, DropdownSchema } from './dropdown';
import { IssueTypeSchema } from './issue-type';
import { PrioritySchema } from './priorities';
import { ProjectSchema } from './project';
import { StatusSchema } from './status';
import { UserSchema } from './user';

export const IssueSchema = z.object({
  id             : z.number().optional(),
  title          : z.string().optional(),
  listPosition   : z.string().optional(),
  description    : z.string().optional(),
  descriptionText: z.string().optional(),
  estimate       : z.number().optional(),
  timeSpent      : z.number().optional(),
  timeRemaining  : z.number().optional(),

  projectId : z.number().optional().or(ProjectSchema),
  typeId    : z.number().optional().or(IssueTypeSchema),
  statusId  : z.number().optional().or(StatusSchema),
  priorityId: z.number().optional().or(PrioritySchema),
  reporterId: z.number().optional().or(UserSchema),
  assignees : z.array(z.number()).optional().or(UserSchema),
  
  type: IssueTypeSchema.optional(),
  
  createdAt : z.string().optional(),
  modifiedAt: z.string().optional(),
  deletedAt : z.string().optional(),
  isDeleted : z.boolean().optional(),
});

export type IIssue = z.infer<typeof IssueSchema>;

export const IssueCollectionSchema = z.array(IssueSchema);

export type IIssueCollection = z.infer<typeof IssueCollectionSchema>;
