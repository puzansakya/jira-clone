// LIBS
import _cloneDeep from 'lodash/cloneDeep';
import { create } from 'zustand';

import { AdditionalInformationStore, Ctx } from "./model";
import { STATUS_LOADING } from '../../shared';

const INITIAL_STATE: Ctx = {
    issues: {
        data: [],
        loading: STATUS_LOADING,
        loaded: false,
    },
    filters: {
        query: '',
        users: [],
    },
}

export const useAdditionalInformationStore = create<AdditionalInformationStore>()((set, get) => ({
    ctx: INITIAL_STATE,
    events: {

        fetch: () => {

        },
        getDetail: () => {

        },
        updateIssue: () => {

        },
        updateFilter: () => {

        },
        applyFilter: () => {

        },
        clearFilter: () => {

        },
        clear: () => {

        },

    },
}));
