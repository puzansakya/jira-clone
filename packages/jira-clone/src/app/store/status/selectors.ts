import { RootState } from "..";
const colorMap: any = {
    done: {
        bg: 'green.500',
        color: 'white',
    },
    backlog: {
        bg: 'gray.300',
        color: 'gray.900',
    },
    selected: {
        bg: 'gray.300',
        color: 'gray.900',
    },
    inprogress: {
        bg: 'blue.500',
        color: 'white',
    },
}

export const selectSlice = (state: RootState) => state.status
export const selectItems = (state: RootState) => selectSlice(state).items;
export const selectDropdownItems = (state: RootState) => {

    const statuses = selectSlice(state).items;

    return statuses.map(status => {
        return {
            label: status.name,
            value: status.id,
            ...colorMap[status.name]
        }
    })
};
export const selectStatus = (state: RootState) => selectSlice(state).status;
export const selectLoaded = (state: RootState) => selectSlice(state).loaded;
