import { PATHS } from '../../../variables';
import { EnumAvatar } from '../../../types/enums';
import { Avatar, AvatarGroup } from '../../ui';

export const AvatarPreview = () => {
    const { MAIN, COMPONENTS } = PATHS.PAGES;
    const imgSrc = 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp';

    return (
        <div className='flex flex-col gap-4'>
            <div className='flex w-full gap-2.5'>
                <Avatar>
                    <Avatar.Img src={imgSrc} />
                </Avatar>

                <Avatar isOnline>
                    <Avatar.Img src={imgSrc} />
                </Avatar>

                <Avatar isOffline>
                    <Avatar.Img src={imgSrc} />
                </Avatar>

                <Avatar isOnline>
                    <Avatar.Link href={`${MAIN.COMPONENTS}${COMPONENTS.AVATAR}`}>
                        <Avatar.Img src={imgSrc} hasHover />
                    </Avatar.Link>
                </Avatar>
            </div>

            <div className='flex w-full gap-2.5'>
                <Avatar type={EnumAvatar.square}>
                    <Avatar.Img src={imgSrc} />
                </Avatar>

                <Avatar type={EnumAvatar.square} isOnline>
                    <Avatar.Img src={imgSrc} />
                </Avatar>

                <Avatar type={EnumAvatar.square} isOffline>
                    <Avatar.Img src={imgSrc} />
                </Avatar>

                <Avatar type={EnumAvatar.square} isOnline>
                    <Avatar.Link href={`${MAIN.COMPONENTS}${COMPONENTS.AVATAR}`}>
                        <Avatar.Img src={imgSrc} hasHover />
                    </Avatar.Link>
                </Avatar>
            </div>

            <div className='flex w-full gap-2.5'>
                <AvatarGroup visibleCount={3}>
                    <Avatar>
                        <Avatar.Link href={`${MAIN.COMPONENTS}${COMPONENTS.AVATAR}`}>
                            <Avatar.Img src={imgSrc} hasHover />
                        </Avatar.Link>
                    </Avatar>

                    <Avatar>
                        <Avatar.Link href={`${MAIN.COMPONENTS}${COMPONENTS.AVATAR}`}>
                            <Avatar.Img src={imgSrc} hasHover />
                        </Avatar.Link>
                    </Avatar>

                    <Avatar>
                        <Avatar.Link href={`${MAIN.COMPONENTS}${COMPONENTS.AVATAR}`}>
                            <Avatar.Img src={imgSrc} hasHover />
                        </Avatar.Link>
                    </Avatar>

                    <Avatar>
                        <Avatar.Link href={`${MAIN.COMPONENTS}${COMPONENTS.AVATAR}`}>
                            <Avatar.Img src={imgSrc} hasHover />
                        </Avatar.Link>
                    </Avatar>

                    <Avatar>
                        <Avatar.Link href={`${MAIN.COMPONENTS}${COMPONENTS.AVATAR}`}>
                            <Avatar.Img src={imgSrc} hasHover />
                        </Avatar.Link>
                    </Avatar>
                </AvatarGroup>
            </div>
        </div>
    );
};
