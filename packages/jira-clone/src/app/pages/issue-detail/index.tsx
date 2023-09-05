  // libs
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import * as fromIssueTypeStore from '../../store/issue-type';
import * as fromInterface from '../../ts';

  // UI
import { IssueDetail } from 'ui';

  // ROUTES
import { RouteEnum } from '../../routes/routeEnum';

  // stores
import { useAppDispatch } from '../../store';
import * as fromIssueStore from '../../store/board';
import * as fromCommentStore from '../../store/comment';
import * as fromPriorityStore from '../../store/priority';
import * as fromStatusStore from '../../store/status';
import * as fromUserStore from '../../store/user';

export const IssueDetailPage = () => {
    // HOOKS
  const dispatch                = useAppDispatch();
  const { id: selectedIssueId } = useParams();
  const navigate                = useNavigate();

    // SELECTORS
  const statusDropdownCollections = useSelector(
    fromStatusStore.selectDropdownItems
  );
  const issueTypeOptions        = useSelector(fromIssueTypeStore.selectDropdownItems);
  const comments                = useSelector(fromCommentStore.selectItems);
  const userDropdownCollections = useSelector(
    fromUserStore.selectDropdownItems
  );
  const priorityDropodownCollections = useSelector(
    fromPriorityStore.selectDropdownItems
  );

  const handleClose = () => {
    navigate(RouteEnum.PROJECTBOARD);
  };

  return (
    <IssueDetail
      typeOptions     = {issueTypeOptions}
      isOpen          = {true}
      onClose         = {handleClose}
      priorityOptions = {priorityDropodownCollections}
      comments        = {comments}
      statusOptions   = {statusDropdownCollections}
      assigneeOptions = {userDropdownCollections}
      reporterOptions = {userDropdownCollections}
      createComment   = {(comment: string) => {
        dispatch(
          fromCommentStore.create({
            body   : comment,
            issueId: +(selectedIssueId + ''),
            userId : 4,
          })
        );
      }}
      fetchInitialData={() => {
        dispatch(fromCommentStore.fetchComments(selectedIssueId));
      }}
      updateComment={(comment: fromInterface.IComment) => {
        dispatch(
          fromCommentStore.update({
            ...comment,
            issueId: selectedIssueId,
            userId : 4,
          })
        );
      }}
      onFetchDetail={() => {
        return dispatch(fromIssueStore.fetchIssueDetail(selectedIssueId));
      }}
      onSubmit={async (data: any) => {
        console.log(JSON.stringify(data, null, 2));
        await dispatch(fromIssueStore.updateIssue(data));
      }}
    />
  );
};

export default IssueDetailPage;
