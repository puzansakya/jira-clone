export interface IIssue {
  title: string;
  listPosition?: number;
  description?: string;
  descriptionText?: string;
  estimate?: number;
  timeSpent?: number;
  timeRemaining?: number;

  typeId?: number;
  statusId?: number;
  priorityId?: number;
  reporterId?: number;
  projectId?: number;
  assignees?: string[];
}
