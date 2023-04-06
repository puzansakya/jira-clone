import { Blocks } from "./blocks";
import { Columns } from "./columns";

export interface InitialData<T> {
    blocks: Blocks<T>;
    columns: Columns;
    columnOrder: string[];
}
