import { NavLink } from 'react-router-dom';
import { getComponentsLinks } from '../../helpers';
import { Text } from '../ui';
import cn from 'classnames';

export const ComponentsSidebar = () => {
    const linksArr = getComponentsLinks();

    return (
        <section className='fixed z-10 top-[164px] hidden xl:block w-[210px] px-4 -ml-[210px]'>
            <div className='w-full'>
                <Text className='text-text/70 pl-3 mb-2 last:mb-0'>Components</Text>

                <ul className='flex flex-col gap-1 w-full'>
                    {linksArr.map(({ name, href }) => (
                        <li key={name} className='w-full'>
                            <NavLink
                                to={href}
                                className={({ isActive }) =>
                                    cn(
                                        'flex items-center justify-center w-full sm:w-fit h-8 font-media px-3 rounded-md transition-colors duration-300 hover:bg-border',
                                        {
                                            'text-title bg-border pointer-events-none': isActive,
                                        }
                                    )
                                }
                            >
                                {name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};
