import { createMachine } from 'xstate';

export const machine = createMachine<any>(
  {
    /** @xstate-layout N4IgpgJg5mDOIC5QDMwBcDGALABAS1lgFcwcBbAQ2zwDswA6VTLWqAYggHs77aA3TgGsGTbAH0CxMAG0ADAF1EoAA6dYeNHm5KQAD0QAmAMwA2egHYArJdMGAHAE4Txk3csAaEAE9EAWgAsAIz0llYmgQbmDo6WJuYAvvGeoriSJORULDwprGxgAE75nPn0ygA2FGjIxWSM6OJpMgo6quqa2kh6iOayRvR2-j0G-rH2Dk6ePgi+cfRG-v4mDgYOlg5GBrJ2BonJ9amE6ZTUPI0AYvuQbBhlYBT5Z3hlaAVyip2tGlo0OvoI-rJ6IFArIliDzLYTAtJogjLJAYEekZrEsgnZZA5diAUvhDqRjlkGOdLhA2LA7vlsG8Wmovh1QH9AqY5nZWeY7D0TJZEeZzDCEBEzK5ERteeYQQ5zDssTROBA4DocY0MicwDS2t9fn5zP1HHDHAYTEYIdYHPzfIFLP5+sMelteqzJUYsUq8SrCXVmKx1XSfp0-v4jMF5qZLI5JbE7Mj+ci7PRA4EAcMnGNpXtmLipO7aES8RdmJAfe0-QzuoDLJtkZtLPCNoETObgfQVnZgQYQdyaxCTC79pmjpkc-QCkV8oWPrTi1qEByDPR4bIgv5VsNhoF+bz6M51uYFhDjFZpYkgA */
    context: {
      search: '',
      issueList: null,
    },
    id: 'fetch issue machine',
    initial: 'fetching',
    states: {
      fetching: {
        invoke: {
          src: 'fetchIssue',
          id: 'fetch_issue',
          onDone: [
            {
              target: 'issueFetched',
              actions: {
                type: 'saveIssueList',
                params: {},
              },
            },
          ],
          onError: [
            {
              target: 'errored',
            },
          ],
        },
      },
      issueFetched: {
        on: {
          search: {
            target: 'fetching',
            actions: {
              type: 'updateSearchText',
              params: {},
            },
          },
          clearFilter: {
            target: 'fetching',
            actions: {
              type: 'updateSearchText',
              params: {},
            },
          },
        },
      },
      errored: {},
    },
    schema: { events: {} as { type: 'clearFilter' } | { type: 'search' } },
    predictableActionArguments: true,
    preserveActionOrder: true,
  },
  {
    actions: {
      saveIssueList,
      updateSearchText,
    },
    services: { fetchIssue },
    guards: {},
    delays: {},
  }
);

function saveIssueList(context: any, event: any) {
  context.issueList = event.data.data;
}
function updateSearchText(context: any, event: any) {
  context.search = event.search;
}

function fetchIssue(context: any, event: any) {
  let url = `http://localhost:8000/api/v1/issues/search`;
  if(context.search) {
    url += `?search=${context.search}`
  }

  return fetch(url).then((res: any) => res.json());
}
