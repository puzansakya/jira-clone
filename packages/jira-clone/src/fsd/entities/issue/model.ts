import { z } from 'zod';
import { ProjectSchema } from '../project/model';
import { UserSchema } from '../user/model';
import { DataState } from '../../shared';


export const IssueTypeSchema = z.object({
    id: z.number().optional(),
    name: z.string().optional(),

    modifiedAt: z.string().optional(),
    deletedAt: z.string().optional(),
    isDeleted: z.boolean().optional(),
});
export type IIssueType = z.infer<typeof IssueTypeSchema>;
export const IssueTypeCollectionSchema = z.array(IssueTypeSchema);
export type IIssueTypeCollection = z.infer<typeof IssueTypeCollectionSchema>;


export const PrioritySchema = z.object({
    id: z.number().optional(),
    name: z.string().optional(),
    icon: z.string().optional(),

    modifiedAt: z.string().optional(),
    deletedAt: z.string().optional(),
    isDeleted: z.boolean().optional(),
});
export type IPriority = z.infer<typeof PrioritySchema>;
export const PriorityCollectionSchema = z.array(PrioritySchema);
export type IPriorityCollection = z.infer<typeof PriorityCollectionSchema>;


export const StatusSchema = z.object({
    id: z.number().optional(),
    name: z.string().optional(),
    position: z.string().optional(),
    bg: z.string().optional(),
    color: z.string().optional(),

    modifiedAt: z.string().optional(),
    deletedAt: z.string().optional(),
    isDeleted: z.boolean().optional(),
});
export type IStatus = z.infer<typeof StatusSchema>;
export const StatusCollectionSchema = z.array(StatusSchema);
export type IStatusCollection = z.infer<typeof StatusCollectionSchema>;

export const IssueSchema = z.object({
    id: z.number().optional(),
    title: z.string().optional(),
    listPosition: z.string().optional(),
    description: z.string().optional(),
    descriptionText: z.string().optional(),
    estimate: z.number().optional(),
    timeSpent: z.number().optional(),
    timeRemaining: z.number().optional(),

    projectId: z.number().optional().or(ProjectSchema),
    typeId: z.number().optional().or(IssueTypeSchema),
    statusId: z.number().optional().or(StatusSchema),
    priorityId: z.number().optional().or(PrioritySchema),
    reporterId: z.number().optional().or(UserSchema),
    assignees: z.array(z.number()).optional().or(UserSchema),

    type: IssueTypeSchema.optional(),

    createdAt: z.string().optional(),
    modifiedAt: z.string().optional(),
    deletedAt: z.string().optional(),
    isDeleted: z.boolean().optional(),
});
export type IIssue = z.infer<typeof IssueSchema>;
export const IssueCollectionSchema = z.array(IssueSchema);
export type IIssueCollection = z.infer<typeof IssueCollectionSchema>;

export interface Ctx {
    issues: DataState<IIssueCollection>;
    filters: {
        query: string;
        users: any[];
    };
}

export interface Events {
    fetch: () => void;
    getDetail: (issueId:string) => void;
    updateIssue: (issueId:string) => void;
    updateFilter: (filters:any) => void;
    applyFilter: () => void;
    clearFilter: () => void;
    clear: () => void;
}

export interface AdditionalInformationStore {
    ctx: Ctx;
    events: Events;
}
