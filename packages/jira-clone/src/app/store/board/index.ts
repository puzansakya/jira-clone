import * as fromActions from "./actions"
import * as fromSelectors from "./selectors"

export const BoardStore = {
    ...fromActions,
    ...fromSelectors
}

export * from "./actions"
export * from "./selectors"