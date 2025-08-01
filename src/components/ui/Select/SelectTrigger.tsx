import { Dispatch, FC, forwardRef, HTMLAttributes, RefAttributes, SetStateAction } from 'react';
import { ISelectItem } from '../../../types/interfaces/SelectItem';
import { Text } from '../Text';
import { ChevronDown } from 'lucide-react';
import cn from 'classnames';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
    placeholder?: string;
    isOpen?: boolean;
    selectedItem?: ISelectItem;
    className?: string;
    setIsOpen?: Dispatch<SetStateAction<boolean>>;
    setSelectedItem?: Dispatch<SetStateAction<ISelectItem>>;
}

export const SelectTrigger: FC<Props> = forwardRef<HTMLDivElement, Props>(
    (
        {
            placeholder = 'Select',
            isOpen,
            selectedItem,
            setIsOpen = () => {},
            setSelectedItem = () => {},
            className = '',
            ...props
        },
        ref
    ) => {
        return (
            <div
                ref={ref}
                {...props}
                onClick={() => setIsOpen((prevState) => !prevState)}
                className={`relative flex items-center w-full h-10 px-4 pr-12 rounded-md cursor-pointer select-none border border-border ${className}`}
            >
                <Text className={cn({ 'text-white': selectedItem?.value !== '' })}>
                    {selectedItem?.label || placeholder}
                </Text>

                <ChevronDown className='absolute right-4 size-5' />
            </div>
        );
    }
);
