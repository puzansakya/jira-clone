import BaseService from "../../../core/BaseService";
import Issue from "../domain/issue";

export const update = (payload: Partial<Issue>) => {
    return BaseService._update({ payload, Model: Issue })
}