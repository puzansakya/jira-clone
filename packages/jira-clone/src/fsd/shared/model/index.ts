export const STATUS_LOADING = 'LOADING';
export const STATUS_IDLE = 'IDLE';

export type LOADING_TYPE = typeof STATUS_LOADING | typeof STATUS_IDLE
export interface DataState<T> {
    data: T;
    loading: LOADING_TYPE;
    loaded: boolean;
}

