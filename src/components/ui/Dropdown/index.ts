import { DropdownContent } from './DropdownContent';
import { DropdownTrigger } from './DropdownTrigger';
import { DropdownWrapper } from './DropdownWrapper';

export const Dropdown = Object.assign(DropdownWrapper, {
    Trigger: DropdownTrigger,
    Content: DropdownContent,
});
