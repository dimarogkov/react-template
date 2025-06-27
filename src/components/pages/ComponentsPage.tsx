import { Link } from 'react-router-dom';
import { getComponentsLinks } from '../../helpers';
import { EnumText, EnumTitle } from '../../types/enums';
import { Line, Text, Title } from '../ui';

export const ComponentsPage = () => {
    const linksArr = getComponentsLinks();

    return (
        <>
            <section className='relative w-full'>
                <div className='container'>
                    <div className='w-full'>
                        <Title titleType={EnumTitle.h2} className='mb-2 last:mb-0'>
                            Components
                        </Title>

                        <Text textType={EnumText.large}>
                            Here you can find all the components available in the template. We are working on adding
                            more components.
                        </Text>

                        <Line />

                        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 w-full'>
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

            {/* <section className='relative w-full mb-2.5 last:mb-0'>
                <div className='container'>
                    <div className='flex flex-wrap w-full gap-2.5'>
                        <Dropdown className='w-full sm:w-fit'>
                            <Dropdown.Trigger>
                                <Btn>Dropdown Trigger</Btn>
                            </Dropdown.Trigger>
                            <Dropdown.Content className='md:w-[400px]'>
                                <ul className='flex flex-col gap-2 w-full mb-4 last:mb-0'>
                                    <li>
                                        <Text>
                                            Lorem, ipsum dolor sit amet consectetur. Lorem, ipsum dolor sit amet
                                            consectetur, asd dima and some people.
                                        </Text>
                                    </li>
                                    <li>
                                        <Text>Item 2</Text>
                                    </li>
                                    <li>
                                        <Text>Item 3</Text>
                                    </li>
                                    <li>
                                        <Text>Item 4</Text>
                                    </li>
                                </ul>
                            </Dropdown.Content>
                        </Dropdown>

                        <Modal className='w-full sm:w-auto'>
                            <Modal.Trigger>
                                <Btn>Modal Trigger</Btn>
                            </Modal.Trigger>
                            <Modal.Content>
                                <div className='w-full'>
                                    <Title titleType={EnumTitle.h3} className='p-2.5 md:p-4'>
                                        Modal Title
                                    </Title>

                                    <Line className='!m-0' />

                                    <div className='flex flex-col gap-2 w-full p-2.5 md:p-4'>
                                        <Text>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima eum dolor
                                            nulla delectus sint optio cum ducimus vitae placeat veritatis vero deleniti,
                                            voluptatibus fugit. Laudantium error cum earum rem hic!
                                        </Text>

                                        <Text>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima eum dolor
                                            nulla delectus sint optio cum ducimus vitae placeat veritatis vero deleniti,
                                            voluptatibus fugit. Laudantium error cum earum rem hic!
                                        </Text>
                                    </div>
                                </div>
                            </Modal.Content>
                        </Modal>
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
                                        type={EnumToast.success}
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
                                        type={EnumToast.warning}
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
                                        type={EnumToast.error}
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
