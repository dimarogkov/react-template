import { useState } from 'react';
import { Reorder } from 'framer-motion';
import { Card, Text, Title } from '@components/atoms';

const ITEMS: Record<number, { title: string; text: string }> = {
    1: {
        title: 'Packing',
        text: 'Pack your bags the night before so the morning stays calm and unhurried.'
    },
    2: {
        title: 'Documents',
        text: 'Double check tickets, passports, and chargers before leaving the house.'
    },
    3: {
        title: 'Departure',
        text: 'Arrive at the airport with enough time to clear security without rushing.'
    }
};

export const ReorderDemo = () => {
    const [itemsY, setItemsY] = useState([1, 2, 3]);
    const [itemsX, setItemsX] = useState([1, 2, 3]);

    const setGrabbingCursor = () => document.body.classList.add('dragging');
    const resetCursor = () => document.body.classList.remove('dragging');

    return (
        <>
            <Reorder.Group values={itemsY} onReorder={setItemsY} axis="y" className="mb-2.5 grid grid-cols-1 gap-2.5">
                {itemsY.map((item) => (
                    <Reorder.Item
                        key={item}
                        value={item}
                        onDragStart={setGrabbingCursor}
                        onDragEnd={resetCursor}
                        className="relative cursor-grab active:cursor-grabbing"
                    >
                        <Card className="bg-bg! p-2.5">
                            <Card.Body>
                                <Title size="h4" className="mb-0.5 last:mb-0">
                                    {ITEMS[item].title}
                                </Title>

                                <Text>{ITEMS[item].text}</Text>
                            </Card.Body>
                        </Card>
                    </Reorder.Item>
                ))}
            </Reorder.Group>

            <Reorder.Group values={itemsX} onReorder={setItemsX} axis="x" className="grid grid-cols-3 gap-2.5">
                {itemsX.map((item) => (
                    <Reorder.Item
                        key={item}
                        value={item}
                        drag
                        onDragStart={setGrabbingCursor}
                        onDragEnd={resetCursor}
                        className="relative cursor-grab active:cursor-grabbing"
                    >
                        <Card className="bg-bg! h-full p-2.5">
                            <Card.Body>
                                <Title size="h4" className="mb-0.5 last:mb-0">
                                    {ITEMS[item].title}
                                </Title>

                                <Text>{ITEMS[item].text}</Text>
                            </Card.Body>
                        </Card>
                    </Reorder.Item>
                ))}
            </Reorder.Group>
        </>
    );
};
