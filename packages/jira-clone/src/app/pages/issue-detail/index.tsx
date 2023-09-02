  // libs
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useDisclosure } from '@chakra-ui/react';
import { useNavigate, useParams } from 'react-router-dom';
import * as fromIssueTypeStore from '../../store/issue-type';

  // UI
import { IssueDetail } from 'ui';

  // stores
import * as fromCommentStore from '../../store/comment';
import * as fromIssueStore from '../../store/board';
import * as fromPriorityStore from '../../store/priority';
import * as fromStatusStore from '../../store/status';
import * as fromUserStore from '../../store/user';
import { RouteEnum } from '../../routes/routeEnum';

export const IssueDetailPage = () => {
    // HOOKS
  const dispatch                = useDispatch();
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
            issueId: selectedIssueId,
            userId : 4,
          })
        );
      }}
      fetchInitialData={() => {
        dispatch(fromCommentStore.fetchComments(selectedIssueId));
      }}
      updateComment={(comment: any) => {
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
