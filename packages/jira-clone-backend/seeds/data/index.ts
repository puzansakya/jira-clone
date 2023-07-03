import { faker } from "@faker-js/faker";

export const seedProjectCategories = [
    { id: faker.datatype.uuid(), name: "Software" },
    { id: faker.datatype.uuid(), name: "Marketing" },
    { id: faker.datatype.uuid(), name: "Business" }
]
export const seedUsers = [
    {
        id: faker.datatype.uuid(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        avatar: faker.internet.avatar()
    },
    {
        id: faker.datatype.uuid(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        avatar: faker.internet.avatar()
    },
]

export const seedProjects = [
    {
        id: faker.datatype.uuid(),
        name: faker.random.words(),
        url: faker.internet.url(),
        description: faker.hacker.phrase(),
        projectCategoryId: seedProjectCategories[0].id
    },
    {
        id: faker.datatype.uuid(),
        name: faker.random.words(),
        url: faker.internet.url(),
        description: faker.hacker.phrase(),
        projectCategoryId: seedProjectCategories[0].id
    },
]

export const seedIssueType = [
    {
        id: faker.datatype.uuid(),
        name: "story",
    },
    {
        id: faker.datatype.uuid(),
        name: "bug",
    },
    {
        id: faker.datatype.uuid(),
        name: "task",
    },
]

export const seedIssueStatuses = [
    {
        id: faker.datatype.uuid(),
        name: "backlog",
        position: 1,
    },
    {
        id: faker.datatype.uuid(),
        name: "inprogress",
        position: 2,
    },
    {
        id: faker.datatype.uuid(),
        name: "selected",
        position: 3,
    },
    {
        id: faker.datatype.uuid(),
        name: "done",
        position: 4,
    },
]

export const seedIssuePriorities = [
    {
        id: faker.datatype.uuid(),
        name: "Highest",
    },
    {
        id: faker.datatype.uuid(),
        name: "High",
    },
    {
        id: faker.datatype.uuid(),
        name: "Medium",
    },
    {
        id: faker.datatype.uuid(),
        name: "Low",
    },
    {
        id: faker.datatype.uuid(),
        name: "Lowest",
    },
]

export const seedIssues = [
    {
        id: faker.datatype.uuid(),
        title: faker.random.words(),
        typeId: seedIssueType[0].id,
        statusId: seedIssueStatuses[0].id,
        priorityId: seedIssuePriorities[0].id,
        listPosition: 0,
        description: faker.hacker.phrase(),
        descriptionText: faker.hacker.phrase(),
        reporterId: seedUsers[0].id,
        projectId: seedProjects[0].id,
    },
    {
        id: faker.datatype.uuid(),
        title: faker.random.words(),
        typeId: seedIssueType[0].id,
        statusId: seedIssueStatuses[0].id,
        priorityId: seedIssuePriorities[0].id,
        listPosition: 0.1,
        description: faker.hacker.phrase(),
        descriptionText: faker.hacker.phrase(),
        reporterId: seedUsers[0].id,
        projectId: seedProjects[0].id,
    },
    {
        id: faker.datatype.uuid(),
        title: faker.random.words(),
        typeId: seedIssueType[0].id,
        statusId: seedIssueStatuses[0].id,
        priorityId: seedIssuePriorities[0].id,
        listPosition: 0.2,
        description: faker.hacker.phrase(),
        descriptionText: faker.hacker.phrase(),
        reporterId: seedUsers[0].id,
        projectId: seedProjects[0].id,
    },
    {
        id: faker.datatype.uuid(),
        title: faker.random.words(),
        typeId: seedIssueType[0].id,
        statusId: seedIssueStatuses[0].id,
        priorityId: seedIssuePriorities[0].id,
        listPosition: 0.3,
        description: faker.hacker.phrase(),
        descriptionText: faker.hacker.phrase(),
        reporterId: seedUsers[0].id,
        projectId: seedProjects[0].id,
    },
    {
        id: faker.datatype.uuid(),
        title: faker.random.words(),
        typeId: seedIssueType[0].id,
        statusId: seedIssueStatuses[1].id,
        priorityId: seedIssuePriorities[0].id,
        listPosition: 0,
        description: faker.hacker.phrase(),
        descriptionText: faker.hacker.phrase(),
        reporterId: seedUsers[0].id,
        projectId: seedProjects[0].id,
    },
    {
        id: faker.datatype.uuid(),
        title: faker.random.words(),
        typeId: seedIssueType[0].id,
        statusId: seedIssueStatuses[1].id,
        priorityId: seedIssuePriorities[0].id,
        listPosition: 0.1,
        description: faker.hacker.phrase(),
        descriptionText: faker.hacker.phrase(),
        reporterId: seedUsers[0].id,
        projectId: seedProjects[0].id,
    },
    {
        id: faker.datatype.uuid(),
        title: faker.random.words(),
        typeId: seedIssueType[0].id,
        statusId: seedIssueStatuses[2].id,
        priorityId: seedIssuePriorities[0].id,
        listPosition: 0.2,
        description: faker.hacker.phrase(),
        descriptionText: faker.hacker.phrase(),
        reporterId: seedUsers[0].id,
        projectId: seedProjects[0].id,
    },
    {
        id: faker.datatype.uuid(),
        title: faker.random.words(),
        typeId: seedIssueType[0].id,
        statusId: seedIssueStatuses[2].id,
        priorityId: seedIssuePriorities[0].id,
        listPosition: 0.3,
        description: faker.hacker.phrase(),
        descriptionText: faker.hacker.phrase(),
        reporterId: seedUsers[0].id,
        projectId: seedProjects[0].id,
    },
    {
        id: faker.datatype.uuid(),
        title: faker.random.words(),
        typeId: seedIssueType[0].id,
        statusId: seedIssueStatuses[3].id,
        priorityId: seedIssuePriorities[0].id,
        listPosition: 0,
        description: faker.hacker.phrase(),
        descriptionText: faker.hacker.phrase(),
        reporterId: seedUsers[0].id,
        projectId: seedProjects[0].id,
    },
    {
        id: faker.datatype.uuid(),
        title: faker.random.words(),
        typeId: seedIssueType[0].id,
        statusId: seedIssueStatuses[3].id,
        priorityId: seedIssuePriorities[0].id,
        listPosition: 0.1,
        description: faker.hacker.phrase(),
        descriptionText: faker.hacker.phrase(),
        reporterId: seedUsers[0].id,
        projectId: seedProjects[0].id,
    },
    {
        id: faker.datatype.uuid(),
        title: faker.random.words(),
        typeId: seedIssueType[0].id,
        statusId: seedIssueStatuses[3].id,
        priorityId: seedIssuePriorities[0].id,
        listPosition: 0.2,
        description: faker.hacker.phrase(),
        descriptionText: faker.hacker.phrase(),
        reporterId: seedUsers[0].id,
        projectId: seedProjects[0].id,
    },
    {
        id: faker.datatype.uuid(),
        title: faker.random.words(),
        typeId: seedIssueType[0].id,
        statusId: seedIssueStatuses[3].id,
        priorityId: seedIssuePriorities[0].id,
        listPosition: 0.3,
        description: faker.hacker.phrase(),
        descriptionText: faker.hacker.phrase(),
        reporterId: seedUsers[0].id,
        projectId: seedProjects[0].id,
    },
]

export const seedProjectUsers = [
    {
        id: faker.datatype.uuid(),
        projectId: seedProjects[0].id,
        userId: seedUsers[0].id,
    },
    {
        id: faker.datatype.uuid(),
        projectId: seedProjects[0].id,
        userId: seedUsers[1].id,
    },
    {
        id: faker.datatype.uuid(),
        projectId: seedProjects[1].id,
        userId: seedUsers[0].id,
    },
    {
        id: faker.datatype.uuid(),
        projectId: seedProjects[1].id,
        userId: seedUsers[1].id,
    },
]

export const seedComments = [
    {
        id: faker.datatype.uuid(),
        body: faker.hacker.phrase(),
        userId: seedUsers[0].id,
        issueId: seedIssues[0].id,
    },
]

export const seedAssignees = [
    {
        id: faker.datatype.uuid(),
        issueId: seedIssues[0].id,
        userId: seedUsers[0].id,
    },
    {
        id: faker.datatype.uuid(),
        issueId: seedIssues[0].id,
        userId: seedUsers[1].id,
    },
]