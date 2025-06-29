import { Link } from 'react-router-dom';
import { getComponentsLinks } from '../../helpers';
import { Separator, Text, Title } from '../ui';

export const ComponentsPage = () => {
    const linksArr = getComponentsLinks();

    return (
        <>
            <section className='relative w-full'>
                <div className='container'>
                    <div className='w-full'>
                        <Title size='h2' className='mb-2 last:mb-0'>
                            Components
                        </Title>

                        <Text size='large'>
                            Here you can find all the components available in the template. We are working on adding
                            more components.
                        </Text>

                        <Separator className='my-5' />

                        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 w-full'>
                            {linksArr.map(({ name, href }) => (
                                <Link key={name} to={href} className='font-medium text-lg text-text hover:underline'>
                                    {name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* <section className='relative w-full mb-10 last:mb-0'>
                <div className='container'>
                    <div className='w-full'>
                        <Tabs>
                            <Tabs.TabList>
                                <Tabs.Tab>Tab 1</Tabs.Tab>
                                <Tabs.Tab>Tab 2</Tabs.Tab>
                                <Tabs.Tab>Tab 3</Tabs.Tab>
                            </Tabs.TabList>
                            <Tabs.Panels>
                                <Tabs.Panel>
                                    Lorem, ipsum dolor sit amet consectetur. Lorem, ipsum dolor sit amet consectetur,
                                    asd dima and some people. Panel 1.
                                </Tabs.Panel>
                                <Tabs.Panel>
                                    Lorem, ipsum dolor sit amet consectetur. Lorem, ipsum dolor sit amet consectetur.
                                    Panel 2.
                                </Tabs.Panel>
                                <Tabs.Panel>
                                    Lorem, ipsum dolor sit amet consectetur. Lorem, ipsum dolor sit amet consectetur.
                                    Lorem, ipsum dolor sit amet consectetur. Lorem, ipsum dolor sit amet consectetur,
                                    asd dima and some people. Panel 3.
                                </Tabs.Panel>
                            </Tabs.Panels>
                        </Tabs>
                    </div>
                </div>
            </section> */}

            {/* <section className='relative w-full mb-10 last:mb-0'>
                <div className='container'>
                    <div className='flex flex-wrap w-full gap-2.5'>
                        <Btn
                            onClick={() =>
                                toast.custom((t) => (
                                    <Toast
                                        toast={t}
                                        data={{
                                            title: 'This is a Info notification.',
                                            text: 'This toast message notifies you of something.',
                                        }}
                                    />
                                ))
                            }
                        >
                            <Info className='size-5' />
                            <span>Toast Info</span>
                        </Btn>

                        <Btn
                            onClick={() =>
                                toast.custom((t) => (
                                    <Toast
                                        toast={t}
                                        type='success'
                                        data={{
                                            title: 'This is a Success notification.',
                                            text: 'This toast message notifies you of all your great successes.',
                                        }}
                                    />
                                ))
                            }
                        >
                            <CircleCheck className='size-5' />
                            <span>Toast Success</span>
                        </Btn>

                        <Btn
                            onClick={() =>
                                toast.custom((t) => (
                                    <Toast
                                        toast={t}
                                        type='warning'
                                        data={{
                                            title: 'This is a Warning notification.',
                                            text: 'This toast message notifies you of a Warning.',
                                        }}
                                    />
                                ))
                            }
                        >
                            <CircleAlert className='size-5' />
                            <span>Toast Warning</span>
                        </Btn>

                        <Btn
                            onClick={() =>
                                toast.custom((t) => (
                                    <Toast
                                        toast={t}
                                        type='error'
                                        data={{
                                            title: 'This is a Error notification.',
                                            text: 'This toast message notifies you of an Error. It is probably not your fault.',
                                        }}
                                    />
                                ))
                            }
                        >
                            <CircleX className='size-5' />
                            <span>Toast Error</span>
                        </Btn>
                    </div>
                </div>
            </section> */}
        </>
    );
};
