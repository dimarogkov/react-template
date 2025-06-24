import { EnumLoaderType } from '../../../types/enums';
import { Loader } from '../../ui';

export const LoaderPreview = () => {
    return (
        <div className='flex items-center justify-center w-full h-24'>
            <Loader loaderType={EnumLoaderType.light} />
        </div>
    );
};
