import { BadgeItem } from './BadgeItem';
import { BadgeWrapper } from './BadgeWrapper';

export const Badge = Object.assign(BadgeWrapper, {
    Item: BadgeItem,
});
