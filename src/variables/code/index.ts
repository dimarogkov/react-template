import { IComponentsSection } from '../../types/interfaces/ComponentsSection';
import { BTN_CODE, BTN_ENUM_CODE, BTN_USAGE_CODE } from './btn';
import { NPM_CLASSNAMES_CODE } from './npm';
import { TEXT_CODE, TEXT_ENUM_CODE, TEXT_USAGE_CODE } from './text';
import { TITLE_CODE, TITLE_ENUM_CODE, TITLE_USAGE_CODE } from './title';

export const COMPONENTS_SECTIONS: IComponentsSection[] = [
    { id: 'code', text: 'Code' },
    { id: 'usage', text: 'Usage' },
];

export {
    NPM_CLASSNAMES_CODE,
    BTN_CODE,
    BTN_ENUM_CODE,
    BTN_USAGE_CODE,
    TEXT_ENUM_CODE,
    TEXT_CODE,
    TEXT_USAGE_CODE,
    TITLE_ENUM_CODE,
    TITLE_CODE,
    TITLE_USAGE_CODE,
};
