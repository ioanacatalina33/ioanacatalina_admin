import ItemsList from 'components/common/ItemsList/ItemsList';
import RightContainer from 'components/common/RightContainer/RightContainer';
import { useState } from 'react';
import { Flex } from 'UI/Flex/Flex';

export default function Locations() {
    const [selectedItem, setSelectedItem] = useState<string | undefined>();

    return (
        <Flex>
            <ItemsList items={{}} onItemClicked={(id) => setSelectedItem(id)} />
            <RightContainer title={'Location'}>Testing here</RightContainer>
        </Flex>
    );
}
