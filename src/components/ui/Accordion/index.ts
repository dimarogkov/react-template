import { AccordionContent } from './AccordionContent';
import { AccordionItem } from './AccordionItem';
import { AccordionTitle } from './AccordionTitle';
import { AccordionWrapper } from './AccordionWrapper';

export const Accordion = Object.assign(AccordionWrapper, {
    Item: AccordionItem,
    Title: AccordionTitle,
    Content: AccordionContent,
});
