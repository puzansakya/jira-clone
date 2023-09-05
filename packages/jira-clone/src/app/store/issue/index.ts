import * as fromActions from "./actions"
import * as fromSelectors from "./selectors"

export const IssueStore = {
    ...fromActions,
    ...fromSelectors
}

export * from './actions';
