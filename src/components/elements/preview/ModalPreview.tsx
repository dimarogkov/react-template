import { EnumBtn, EnumTitle } from '../../../types/enums';
import { Btn, Line, Modal, Text, Title } from '../../ui';

export const ModalPreview = () => {
    return (
        <Modal>
            <Modal.Trigger>
                <Btn btnType={EnumBtn.outline}>Modal</Btn>
            </Modal.Trigger>
            <Modal.Content>
                <div className='w-full'>
                    <Title titleType={EnumTitle.h3} className='p-2.5 md:p-4'>
                        Modal Title
                    </Title>

                    <Line className='!m-0' />

                    <div className='flex flex-col gap-2.5 w-full p-2.5 md:p-4'>
                        <Text>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima eum dolor nulla delectus
                            sint optio cum ducimus vitae placeat veritatis vero deleniti, voluptatibus fugit. Laudantium
                            error cum earum rem hic!
                        </Text>

                        <Text>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima eum dolor nulla delectus
                            sint optio cum ducimus vitae placeat veritatis vero deleniti, voluptatibus fugit. Laudantium
                            error cum earum rem hic!
                        </Text>
                    </div>
                </div>
            </Modal.Content>
        </Modal>
    );
};
