import { ModalContent } from './ModalContent';
import { ModalTrigger } from './ModalTrigger';
import { ModalWrapper } from './ModalWrapper';

export const Modal = Object.assign(ModalWrapper, {
    Trigger: ModalTrigger,
    Content: ModalContent,
});
