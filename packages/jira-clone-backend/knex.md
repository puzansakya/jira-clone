```
// execute in order

// migrations
npx knex migrate:make --knexfile packages/jira-clone-backend/knexfile.ts -x ts create_project_categories
npx knex migrate:make --knexfile packages/jira-clone-backend/knexfile.ts -x ts create_users
npx knex migrate:make --knexfile packages/jira-clone-backend/knexfile.ts -x ts create_projects
npx knex migrate:make --knexfile packages/jira-clone-backend/knexfile.ts -x ts create_issue_types
npx knex migrate:make --knexfile packages/jira-clone-backend/knexfile.ts -x ts create_issue_statuses
npx knex migrate:make --knexfile packages/jira-clone-backend/knexfile.ts -x ts create_issue_priorities
npx knex migrate:make --knexfile packages/jira-clone-backend/knexfile.ts -x ts create_issues
npx knex migrate:make --knexfile packages/jira-clone-backend/knexfile.ts -x ts create_project_users
npx knex migrate:make --knexfile packages/jira-clone-backend/knexfile.ts -x ts create_comments


// seeds
npx knex seed:make --knexfile packages/jira-clone-backend/knexfile.ts -x ts 00-reset
npx knex seed:make --knexfile packages/jira-clone-backend/knexfile.ts -x ts 01-project-categories
npx knex seed:make --knexfile packages/jira-clone-backend/knexfile.ts -x ts 02-users
npx knex seed:make --knexfile packages/jira-clone-backend/knexfile.ts -x ts 03-projects
npx knex seed:make --knexfile packages/jira-clone-backend/knexfile.ts -x ts 04-issue_types
npx knex seed:make --knexfile packages/jira-clone-backend/knexfile.ts -x ts 05-issue_statuses
npx knex seed:make --knexfile packages/jira-clone-backend/knexfile.ts -x ts 06-issue_priorities
npx knex seed:make --knexfile packages/jira-clone-backend/knexfile.ts -x ts 07-issues
npx knex seed:make --knexfile packages/jira-clone-backend/knexfile.ts -x ts 08-project_users
npx knex seed:make --knexfile packages/jira-clone-backend/knexfile.ts -x ts 09-comments


rm -rf packages/jira-clone-backend/pzt.pz
npx knex migrate:latest --knexfile packages/jira-clone-backend/knexfile.ts
npx knex seed:run --knexfile packages/jira-clone-backend/knexfile.ts
```
