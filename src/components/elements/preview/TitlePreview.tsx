import { EnumTitle } from '../../../types/enums';
import { Title } from '../../ui';

export const TitlePreview = () => {
    return (
        <div className='flex flex-col gap-1.5 w-full'>
            <Title>Title H1</Title>
            <Title titleType={EnumTitle.h2}>Title H2</Title>
            <Title titleType={EnumTitle.h3}>Title H3</Title>
            <Title titleType={EnumTitle.h4}>Title H4</Title>
        </div>
    );
};
