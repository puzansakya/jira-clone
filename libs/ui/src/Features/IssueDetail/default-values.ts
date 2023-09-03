import { formNameProperties } from './form-name-properties';

export const mockHtmlData = `<h2>Key terms to know</h2><p><br></p><h3>Issues</h3><p>A Jira 'issue' refers to a single work item of any type or size that is tracked from creation to completion. For example, an issue could be a feature being developed by a software team, a to-do item for a marketing team, or a contract that needs to be written by a legal team.</p><p><br></p><h3>Projects</h3><p>A project is, quite simply, a collection of issues that are held in common by purpose or context. Issues grouped into projects can be configured in a variety of ways, ranging from visibility restrictions to available workflows.</p><p><br></p><h3>Workflows</h3><p>Workflows represent the&nbsp;sequential&nbsp;path an issues takes from creation to completion. A basic workflow might look something like this:</p><p><br></p><p><img src="https://wac-cdn.atlassian.com/dam/jcr:6203a73b-f2a1-4d91-9587-bc4b7d822d6b/workflow_timeline_desktop-temporary.svg?cdnVersion=736" alt="Jira workflow diagram"></p><p><br></p><p>In this case, Open, Done, and the labels in between represent the status an issue can take, while the arrows represent potential transitions from one status to another.</p><p><br></p><h3>Agile</h3><p>Agile is not a Jira Software-specific term. It's a work philosophy that originated in the software development field and has since expanded to a variety of other industries. While we won't belabor the definition here (there are&nbsp;great resources for that!), agile emphasizes an iterative approach to work informed by customer feedback where delivery occurs incrementally and continuously. The ideal agile team can move quickly and adapt to changing requirements without missing much of a beat.</p><p><br></p><h3>Server</h3><p>With&nbsp;Jira Software Server,&nbsp;you host Jira Software on your own hardware and customize your setup however you'd like. This is generally the best option for teams who need to manage all the details,&nbsp;have stricter requirements for data governance,&nbsp;and don't mind the additional complexity of hosting themselves.</p><p><br></p><p><img src="https://wac-cdn.atlassian.com/dam/jcr:4a1b934f-38b4-456e-b807-29e93935e00f/Server%20Cluster@2x.png?cdnVersion=736" alt="Data Center"></p><p><br></p><h3>Data Center</h3><p><br></p><h3>With&nbsp;Jira Software Data Center, you can host Jira Software on your own hardware or with IaaS vendors like&nbsp;<a href="https://www.atlassian.com/enterprise/data-center/aws" rel="noopener noreferrer" target="_blank">AWS</a>&nbsp;and&nbsp;<a href="https://www.atlassian.com/enterprise/data-center/azure" rel="noopener noreferrer" target="_blank">Azure</a>. This is generally the best option for enterprise teams who need uninterrupted access to Jira Software and performance at scale.</h3><p><br></p>`;

export const TYPE_OPTIONS = [
  { value: '1', label: 'Story' },
  { value: '2', label: 'Bug' },
  { value: '3', label: 'Task' },
];

export const STATUS_OPTIONS = [
  { value: '1', label: 'Done', bg: 'green.500', color: 'white' },
  {
    value: '2',
    label: 'Backlog',
    bg   : 'gray.300',
    color: 'gray.900',
  },
  {
    value: '3',
    label: 'Selected For Development',
    bg   : 'gray.300',
    color: 'gray.900',
  },
  {
    value: '4',
    label: 'In Progress',
    bg   : 'blue.500',
    color: 'white',
  },
];

export const ASSIGNEE_OPTIONS = [
  {
    value: '1',
    label: 'Lord Gaben',
    src  : 'https://i.ibb.co/6RJ5hq6/gaben.jpg',
  },
  {
    value: '2',
    label: 'Baby Yoda',
    src  : 'https://i.ibb.co/6n0hLML/baby-yoda.jpg',
  },
  {
    value: '3',
    label: 'Pickle Rick',
    src  : 'https://i.ibb.co/7JM1P2r/picke-rick.jpg',
  },
];

export const PRIORITY_OPTIONS = [
  { value: 'highest', label: 'Highest', icon: 'up' },
  { value: 'high', label: 'High', icon: 'up' },
  { value: 'medium', label: 'Medium', icon: 'up' },
  { value: 'low', label: 'Low', icon: 'down' },
  { value: 'lowest', label: 'Lowest', icon: 'down' },
];

export const REPORTER_OPTIONS = [
  {
    value: '1',
    label: 'Lord Gaben',
    src  : 'https://i.ibb.co/6RJ5hq6/gaben.jpg',
  },
  {
    value: '2',
    label: 'Baby Yoda',
    src  : 'https://i.ibb.co/6n0hLML/baby-yoda.jpg',
  },
  {
    value: '3',
    label: 'Pickle Rick',
    src  : 'https://i.ibb.co/7JM1P2r/picke-rick.jpg',
  },
];

export const INITIAL_FORM_VALUE = {
  [formNameProperties.title.name]      : '',
  [formNameProperties.description.name]: "",
  [formNameProperties.status.name]     : null,
  [formNameProperties.assignees.name]  : null,
  [formNameProperties.reporter.name]   : null,
  [formNameProperties.priority.name]   : null,
  [formNameProperties.type.name]       : null,
  [formNameProperties.estimate.name]   : 0,
  [formNameProperties.timeSpent.name]  : 0,
};

export const MOCK_FORM_VALUE = {
  [formNameProperties.title.name]: 
    'Each issue can be assigned priority from lowest to highest.',
  [formNameProperties.description.name]: mockHtmlData,
  [formNameProperties.status.name]     : STATUS_OPTIONS[0],
  [formNameProperties.assignees.name]  : [
    ASSIGNEE_OPTIONS[2],
    ASSIGNEE_OPTIONS[1],
  ],
  [formNameProperties.reporter.name] : REPORTER_OPTIONS[2],
  [formNameProperties.priority.name] : PRIORITY_OPTIONS[1],
  [formNameProperties.type.name]     : TYPE_OPTIONS[0],
  [formNameProperties.estimate.name] : 100,
  [formNameProperties.timeSpent.name]: 20,
};
