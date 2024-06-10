import { FieldValues, UseFormRegister } from 'react-hook-form';

type Props = {
    type?: string;
    name?: string;
    value?: string;
    placeholder?: string;
    className?: string;
    checked?: boolean;
    autoFocus?: boolean;
    register?: UseFormRegister<FieldValues>;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    onBlur?: React.FocusEventHandler<HTMLInputElement>;
};

export const Input: React.FC<Props> = ({
    type = 'text',
    name = 'name',
    value,
    placeholder = '',
    className = '',
    checked = false,
    autoFocus = false,
    onChange = () => {},
    onBlur = () => {},
    register = () => {},
}) => {
    return (
        <input
            type={type}
            name={name}
            value={value}
            checked={checked}
            placeholder={placeholder}
            onChange={onChange}
            onBlur={onBlur}
            autoFocus={autoFocus}
            className={`w-full h-[40px] px-[16px] rounded-[4px] border-2 border-slate-300 outline-none transition-all duration-300 focus:border-black ${className}`}
            {...register(name)}
        />
    );
};
