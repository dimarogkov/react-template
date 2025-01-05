import { FC, forwardRef, OptionHTMLAttributes, RefAttributes } from 'react';

interface Props extends OptionHTMLAttributes<HTMLOptionElement>, RefAttributes<HTMLOptionElement> {}

export const SelectOption: FC<Props> = forwardRef<HTMLOptionElement, Props>(({ ...props }, ref) => {
    return <option ref={ref} {...props} />;
});
