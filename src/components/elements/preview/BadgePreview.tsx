import { User } from 'lucide-react';
import { Badge } from '../../ui';

export const BadgePreview = () => {
    return (
        <div className='flex flex-wrap gap-2 w-full'>
            <Badge>Default Badge</Badge>

            <Badge>
                <User className='size-5' />
                <span>Icon Badge</span>
            </Badge>
        </div>
    );
};
