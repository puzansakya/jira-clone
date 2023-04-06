import { Modal, ModalBody, ModalContent, ModalOverlay } from '@chakra-ui/react';

import DetailBody from './body';
import DetailHeader from './header';
const IssueDetailModal = ({ isOpen, onClose }: any) => {
  return (
    <Modal size="5xl" isCentered isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalBody py={4}>
          <DetailHeader onClose={onClose} />
          <DetailBody />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
export default IssueDetailModal;
