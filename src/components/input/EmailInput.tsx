import { baseClassName, InputProps } from '@/components/input';
import clsx from 'clsx';
import { Label } from '../label';

export const EmailInput: React.FC<InputProps> = ({
    label = null,
    align = 'left',
    ...props
}) => {
    props.className = clsx(
        baseClassName,
        align === 'left' ? 'text-left pr-10' : 'text-right pl-10',
        props.className,
    );

    return (
        <div className="flex flex-col relative space-y-2">
            {label && <Label htmlFor={props.id}>{label}</Label>}
            <div className="relative flex flex-col">
                <input type="email" {...props} />
                <div
                    className={clsx(
                        'absolute flex items-center h-full',
                        align === 'left'
                            ? 'right-0 top-0 py-2 pr-3'
                            : 'left-0 top-0 py-2 pl-3',
                    )}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-5 h-5 text-gray-400"
                    >
                        <path
                            fillRule="evenodd"
                            d="M5.404 14.596A6.5 6.5 0 1116.5 10a1.25 1.25 0 01-2.5 0 4 4 0 10-.571 2.06A2.75 2.75 0 0018 10a8 8 0 10-2.343 5.657.75.75 0 00-1.06-1.06 6.5 6.5 0 01-9.193 0zM10 7.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5z"
                            clipRule="evenodd"
                        />
                    </svg>
                </div>
            </div>
        </div>
    );
};
