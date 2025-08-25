export const PAGINATION_CODE = `import { PaginationWrapper } from './PaginationWrapper';
import { PaginationPrevious } from './PaginationPrevious';
import { PaginationItem } from './PaginationItem';
import { PaginationNext } from './PaginationNext';
import { PaginationEllipsis } from './PaginationEllipsis';

export const Pagination = Object.assign(PaginationWrapper, {
	Previous: PaginationPrevious,
	Item: PaginationItem,
	Next: PaginationNext,
	Ellipsis: PaginationEllipsis,
});`;

export const PAGINATION_WRAPPER_CODE = `import {
	Children,
	cloneElement,
	Dispatch,
	FC,
	forwardRef,
	HTMLAttributes,
	isValidElement,
	ReactElement,
	RefAttributes,
	SetStateAction,
} from 'react';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
	options: {
		currentPage: number;
		endPage: number;
		setPage: Dispatch<SetStateAction<number>>;
	};
	disabled?: boolean;
	className?: string;
}

export const PaginationWrapper: FC<Props> = forwardRef<HTMLDivElement, Props>(
	({ options, disabled = false, className = '', ...props }, ref) => {
		return (
			<>
				{!disabled && (
					<div ref={ref} {...props} className={\`relative flex justify-center gap-1 w-full \${className}\`}>
						{Children.map(props.children, (child) => {
							if (isValidElement(child)) {
								return cloneElement(child as ReactElement, { options });
							}

							return child;
						})}
					</div>
				)}
			</>
		);
	}
);`;

export const PAGINATION_PREVIOUS_CODE = `import { ButtonHTMLAttributes, Dispatch, FC, forwardRef, RefAttributes, SetStateAction } from 'react';
import { ChevronLeft } from 'lucide-react';
import cn from 'classnames';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>, RefAttributes<HTMLButtonElement> {
    options?: {
        currentPage: number;
        endPage: number;
        setPage: Dispatch<SetStateAction<number>>;
    };
    className?: string;
}

export const PaginationPrevious: FC<Props> = forwardRef<HTMLButtonElement, Props>(
    ({ options, className = '', ...props }, ref) => {
        const { currentPage = 1, setPage = () => {} } = options ?? {};

        const togglePrevious = () => setPage(currentPage - 1);

        return (
            <button
                ref={ref}
                {...props}
                type='button'
                disabled={currentPage === 1}
                onClick={togglePrevious}
                className={cn(
                    \`relative flex items-center justify-center size-9 text-title rounded-md transition-colors duration-300 hover:bg-border \${className}\`,
                    {
                        'opacity-60 pointer-events-none select-none': currentPage === 1,
                    }
                )}
            >
                <ChevronLeft className='size-5' />
            </button>
        );
    }
);`;

export const PAGINATION_ITEM_CODE = `import { ButtonHTMLAttributes, Dispatch, FC, forwardRef, RefAttributes, SetStateAction } from 'react';
import cn from 'classnames';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>, RefAttributes<HTMLButtonElement> {
	options?: {
		currentPage: number;
		endPage: number;
		setPage: Dispatch<SetStateAction<number>>;
	};
	page: string | number;
	className?: string;
}

export const PaginationItem: FC<Props> = forwardRef<HTMLButtonElement, Props>(
	({ options, page, className = '', ...props }, ref) => {
		const { currentPage = 1, setPage = () => {} } = options ?? {};

		const toggleItem = () => setPage(+page);

		return (
			<button
				ref={ref}
				{...props}
				type='button'
				onClick={toggleItem}
				className={cn(
					\`relative flex items-center justify-center size-9 text-title rounded-md border \${className}\`,
					{
						'border-transparent transition-colors duration-300 hover:bg-border': currentPage !== page,
						'border-border bg-border pointer-events-none': currentPage === page,
					}
				)}
			>
				{page}
			</button>
		);
	}
);`;

export const PAGINATION_NEXT_CODE = `import { ButtonHTMLAttributes, Dispatch, FC, forwardRef, RefAttributes, SetStateAction } from 'react';
import { ChevronRight } from 'lucide-react';
import cn from 'classnames';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>, RefAttributes<HTMLButtonElement> {
    options?: {
        currentPage: number;
        endPage: number;
        setPage: Dispatch<SetStateAction<number>>;
    };
    className?: string;
}

export const PaginationNext: FC<Props> = forwardRef<HTMLButtonElement, Props>(
    ({ options, className = '', ...props }, ref) => {
        const { currentPage = 1, endPage, setPage = () => {} } = options ?? {};

        const toggleNext = () => setPage(currentPage + 1);

        return (
            <button
                ref={ref}
                {...props}
                type='button'
                disabled={currentPage === endPage}
                onClick={toggleNext}
                className={cn(
                    \`relative flex items-center justify-center size-9 text-title rounded-md transition-colors duration-300 hover:bg-border \${className}\`,
                    {
                        'opacity-60 pointer-events-none select-none': currentPage === endPage,
                    }
                )}
            >
                <ChevronRight className='size-5' />
            </button>
        );
    }
);`;

export const PAGINATION_ELLIPSIS_CODE = `import { FC, forwardRef, HTMLAttributes, RefAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
	currentPage?: number;
	className?: string;
	setCurrentPage?: (page: number) => void;
}

export const PaginationEllipsis: FC<Props> = forwardRef<HTMLDivElement, Props>(
	({ currentPage, className = '', setCurrentPage = () => {}, ...props }, ref) => {
		return (
			<div
				ref={ref}
				{...props}
				className={\`relative flex items-center justify-center size-9 text-title text-base select-none pointer-events-none \${className}\`}
			>
				...
			</div>
		);
	}
);`;

export const PAGINATION_HOOK_CODE = `import { useState } from 'react';
import { getPaginationRange } from '../helpers';

export const usePagination = <T extends any[]>(arr: T, perPage: number = 10) => {
	const [page, setPage] = useState(1);

	const start = (page - 1) * perPage;
	const end = page * perPage;
	const data = arr.slice(start, end);

	const endPage = Math.ceil(arr.length / perPage);
	const pagesArr = getPaginationRange(page, endPage);

	const options = { currentPage: page, endPage, setPage };

	return {
		data,
		pagesArr,
		options,
	};
};`;

export const PAGINATION_HELPER_CODE = `export const getPaginationRange = (currentPage: number, totalPages: number) => {
    const createRange = (start: number, end: number) => {
        const length = end - start + 1;
        return Array.from({ length }, (_, i) => start + i);
    };

    if (totalPages <= 7) {
        return createRange(1, totalPages);
    }

    if (currentPage <= 3) {
        return [...createRange(1, 5), 'ellipsis', totalPages];
    }

    if (currentPage >= totalPages - 2) {
        return [1, 'ellipsis', ...createRange(totalPages - 4, totalPages)];
    }

    return [1, 'ellipsis', ...createRange(currentPage - 1, currentPage + 1), 'ellipsis', totalPages];
};`;
