import ItemsList from 'components/common/ItemsList/ItemsList';
import RightContainer from 'components/common/RightContainer/RightContainer';
import { useEffect, useState } from 'react';
import { Flex } from 'UI/Flex/Flex';
import { defer, useLoaderData, Await } from 'react-router-dom';
import { getArticles } from 'api/api';
import { Article, AlbumType } from 'types/data';
import { getFileDateLocationTitle } from 'utils/helpers';
import { ArticlesData } from 'api/loaders';

export function Articles() {
    const { articles } = useLoaderData() as ArticlesData;

    const [listItems, setListItems] = useState<Record<string, string>>({});

    const [selectedItem, setSelectedItem] = useState<string | undefined>();

    useEffect(() => {
        let list = {};
        if (articles)
            articles.forEach((a) => {
                if (a._id) list = { ...list, [a._id]: getFileDateLocationTitle(a) };
            });
        setListItems(list);
    }, [articles]);

    return (
        <Flex>
            <ItemsList
                items={listItems}
                onItemClicked={(id) => setSelectedItem(id)}
                selectedItem={selectedItem}
            />
            <RightContainer title={'Article'}>Testing here...</RightContainer>
        </Flex>
    );
}
