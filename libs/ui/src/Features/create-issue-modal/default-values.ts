import {formNameProperties} from './form-name-properties';


export const ISSUE_TYPE_OPTIONS = [
    {
        label: 'Task',
        value: 1,
    },
    {
        label: 'Story',
        value: 2,
    },
    {
        label: 'Bug',
        value: 3,
    },
];

export const PRIORITY_OPTIONS = [
    {value: 'highest', label: 'Highest', icon: 'up'},
    {value: 'high', label: 'High', icon: 'up'},
    {value: 'medium', label: 'Medium', icon: 'up'},
    {value: 'low', label: 'Low', icon: 'down'},
    {value: 'lowest', label: 'Lowest', icon: 'down'},
];

export const REPORTER_OPTIONS = [
    {
        value: '1',
        label: 'Lord Gaben',
        src: 'https://i.ibb.co/6RJ5hq6/gaben.jpg',
    },
    {
        value: '2',
        label: 'Baby Yoda',
        src: 'https://i.ibb.co/6n0hLML/baby-yoda.jpg',
    },
    {
        value: '3',
        label: 'Pickle Rick',
        src: 'https://i.ibb.co/7JM1P2r/picke-rick.jpg',
    },
];


export const INITIAL_FORM_VALUE = {
    [formNameProperties.IssueType.name]: ISSUE_TYPE_OPTIONS[0],
    [formNameProperties.ShortSummary.name]: "This is short summary",
    [formNameProperties.Description.name]: 'Plan, track, and manage your agile and software development projects in Jira. Customize your workflow, collaborate, and release great software.',
    [formNameProperties.Reporter.name]: REPORTER_OPTIONS[0],
    [formNameProperties.Priority.name]: PRIORITY_OPTIONS[0],
    [formNameProperties.Assignees.name]: REPORTER_OPTIONS[0],
};
