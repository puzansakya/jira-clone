import { createMachine } from 'xstate';

export const machine = createMachine<any>(
  {
    /** @xstate-layout N4IgpgJg5mDOIC5QDMwBcDGALABAS1lgFcwcBbAQ2zwDswA6VTLWqAYggHs77aA3TgGsGTbAH0CxMAG0ADAF1EoAA6dYeNHm5KQAD0QAmWQA56BgMwBWWQEYTAFgBsR+wHYANCACeiYzfr2xrLBBo6u5vYGlpEAvjGeoriSJORULDyJrGxgAE45nDn0ygA2FGjIBWSM6OLJMgo6quqa2kh6iI6OlvSWrsGONvayzlaePghG-n3BNkZRblEGcQk1SYQplNQ8dQBiq5BsGMVgFDk7eMVouXKKbU0aWjQ6+hMmZla2Ds6ybmOGrv4TDN7INBo5bMsQIl8OtSJt0gxdvsIGxYCcctgbo01A9WqAXkZTBZrHZjE4XB5vIgbK57PRXEFgsYAJyyZmuPrGOLxEA0TgQOA6aF1VJbMDY5qPZ6IAC0jj+CDlkOFsNFCOqzFYEtxTzaL3MxlcAUZ5nMBgMrkc9mZNgVNKNNmZ1h+1nslj8lkcytWMKkatoiNhe2YkG1LV1+MQkTtNimvWsprCFhsBu9zF9GzSAfouXyOVDdxx4elCDJ5mN-QMrIsNuZCqMsnojjJzJZzLdA2ZjnM3JiQA */
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
          clearFilter: {
            target: 'fetching',
            actions: {
              type: 'updateSearchText',
              params: {},
            },
          },
          search: {
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
