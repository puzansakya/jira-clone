import BaseService from "../../../core/BaseService";
import Issue from "../domain/issue";
import Assignee from "../../assignee/domain/assignee";

export const update = async (payload: Partial<Issue>) => {
    const {assignees, ...rest} = payload

    // bulk delete assignee where issued id
    await Assignee.query().delete().where({
        issueId: rest.id
    })

    // prepare assignee graph
    const assigneeGraph = assignees.map(assignee => {
        return {
            issueId: rest.id,
            userId: assignee
        }
    })

    // insert graph
    await BaseService._create_graph(Assignee, assigneeGraph);

    return BaseService._update({
        Model: Issue,
        payload: {...rest, descriptionText: rest.description.replace(/(<([^>]+)>)/ig, "").slice(0,100)}
    })
}