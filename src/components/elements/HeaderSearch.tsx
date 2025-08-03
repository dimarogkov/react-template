/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { debounce, getLinks } from '../../helpers';
import { HeaderSearchLink } from './HeaderSearchLink';
import { Input, Label, Modal, Text } from '../ui';
import { Search } from 'lucide-react';

export const HeaderSearch = () => {
    const [appliedSearchValue, setAppliedSearchValue] = useState('');
    const [searchValue, setSearchValue] = useState('');
    const { pathname } = useLocation();

    useEffect(() => {
        setAppliedSearchValue('');
        setSearchValue('');
    }, [pathname]);

    const applySearchValue = useCallback(debounce(setAppliedSearchValue, 500), []);

    const { componentsLinks, dataFetchingLinks, formValidationLinks, storeLinks } = getLinks();

    const links = [
        ...componentsLinks.map((link) => ({ ...link, label: 'Component' })),
        ...dataFetchingLinks.map((link) => ({ ...link, label: 'Data Fetching' })),
        ...formValidationLinks.map((link) => ({ ...link, label: 'Form Validation' })),
        ...storeLinks.map((link) => ({ ...link, label: 'Store' })),
    ];

    const filteredLinks = useMemo(() => {
        const value = appliedSearchValue.trim().toLowerCase();

        if (!value) {
            return links;
        }

        return links.filter(({ name }) => name.trim().toLowerCase().includes(value));
    }, [appliedSearchValue, links]);

    const toggleSearch = (value: string) => {
        applySearchValue(value);
        setSearchValue(value);
    };

    return (
        <Modal>
            <Modal.Trigger>
                <Label className='hidden md:block !w-44 pointer-events-none'>
                    <Input placeholder='Search...' disabled className='!h-9 !px-2.5 !bg-border' />
                </Label>
            </Modal.Trigger>
            <Modal.Content disableCloseBtn>
                <div className='flex flex-col w-full h-[420px] overflow-auto'>
                    <div className='!sticky top-0 p-2 bg-bg'>
                        <Label className='!flex items-center'>
                            <Input
                                name='search'
                                placeholder='Search documentation...'
                                value={searchValue}
                                onChange={({ target }) => toggleSearch(target.value)}
                                className='!pl-10'
                                autoFocus
                            />
                            <Search className='absolute left-3 size-5' />
                        </Label>
                    </div>

                    {filteredLinks.length > 0 ? (
                        <div className='w-full p-2 pt-0.5'>
                            {filteredLinks.map((link) => (
                                <HeaderSearchLink key={link.name} link={link} />
                            ))}
                        </div>
                    ) : (
                        <div className='flex items-center grow w-full p-2 pt-0.5'>
                            <Text className='text-center'>No results found.</Text>
                        </div>
                    )}
                </div>
            </Modal.Content>
        </Modal>
    );
};
